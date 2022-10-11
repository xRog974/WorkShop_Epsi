const {Job} = require("../models/job.model")


module.exports.getAllJobs = async (req, res) => {

    const Jobi = await Job.find()
    res.status(200).json(Jobi)
}

module.exports.getJobById = async (req, res) => {

    const {id} = req.body
    Job.findById(id, (err, docs) => {
        if (!err) {
            res.status(200).send(docs)
        } else {
            res.status(400).send(err)
        }
    })

}

module.exports.createdJobs = async (req, res) => {
    const {title, description, skills} = req.body

    console.log(req.body.title, req.body.description, req.body.skills)

    try {
        const data = await Job.create({title, description, skills});
        res.status(201).json({job: data._id})
    } catch (err) {

        console.log(err)
        res.status(400).send({error: "Job non créer"})
    }
}

module.exports.updateJobs = async (req, res) => {

    const updatedRecord = {
        description: req.body.description,
        title: req.body.title
    }

    Job.findByIdAndUpdate(
        req.body.id,
        {$set: updatedRecord},
        {new: true},
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Update error  : " + err)
        }
    )
}
