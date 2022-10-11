const { User } = require('../models/user.model');

module.exports.createUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.create({ email, password });
        res.status(201).json({ user: user._id })
    } catch (err) {

        res.status(400).send({ error: "User non créer" })
    }
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = User.findOne({ email: email }).then(user => {
            if (password !== user.password) {
                res.status(400).send({ message: "mauvais mot de passe ou email" })
            } else {
                res.status(200).send({ message: `Connecté en tant que ${user.email}` })
            }
        });

    } catch {
        res.status(404)
    }
}

module.exports.logOut = async (req, res) => {
    res.status(200).json({ message: "vous êtes bien déconnecté" })

    res.redirect("/")
}


module.exports.getAllUsers = async (req, res) => {
    try {
        const userList = await User.find();
        res.status(200).json(userList);
    } catch (err) {
        res.status(400).send({ error: 'No user fetched!' });
    }
}

module.exports.getUserById = async (req, res) => {
    const { id } = req.body;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).send({ error: `No user found with id ${id}` });
    }
}


module.exports.updateUserById = async (req, res) => {
    const updateRecord = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        skills: req.body.skills
    };

    User.findByIdAndUpdate(
        req.body.id,
        { $set: updateRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.error(`Update error:${err}`);
        }
    )
}

module.exports.deleteUserById = async (req, res) => {
    const { id } = req.body;
    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({ message: `The user with id ${id} has been deleted!` });
    } catch (err) {
        res.status(400).send({ error: `The user with id ${id} has not been deleted!` });
    }
}