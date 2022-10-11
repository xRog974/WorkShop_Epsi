const { User } = require('../models/user.model');

module.exports.createUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.create({ email, password});
        res.status(201).json({user: user._id})
    } catch (err) {
       
        res.status(400).send({error : "User non créer"})
    }
}

module.exports.login  =async (req,res)=> {
    const {email,password}= req.body

    try{
        const user = User.findOne({email : email}).then(user => {
            if(password !== user.password) {
                    res.status(400).send({message :"mauvais mot de passe ou email"})
            }else{
                res.status(200).send({message : `Connecté en tant que ${user.email}`})
            }
        });
      
    }catch{
            res.status(404)
    }
}