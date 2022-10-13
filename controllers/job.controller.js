const { Job } = require("../models/job.model");

module.exports.getAllJobs = async (req, res) => {
    const jobs = await Job.find().populate('skills');
    res.status(200).json(jobs);
};

module.exports.getJobById = async (req, res) => {
    const { id } = req.body;
    const job = await Job.findById(id).populate('skills');
    if (!job) res.status(404).send({ error: `No job found with id ${id}` })
    else res.status(200).json(job);
};

module.exports.createdJob = async (req, res) => {
    const { title, description, skills } = req.body;

    try {
        const job = await Job.create({ title, description, skills });
        res.status(201).json({ job: job._id });
    } catch (err) {
        console.error(err);
        res.status(400).send({ error: `Create error: ${err}` })
    }
};

module.exports.updateJobById = async (req, res) => {
    const updatedRecord = {
        title: req.body.title,
        description: req.body.description,
        skills: req.body.skills,
    };

    Job.findByIdAndUpdate(
        req.body.id,
        { $set: updatedRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.error("Update error: " + err);
        }
    );
};

module.exports.deleteJobById = async (req, res) => {
    const { id } = req.body;
    try {
        const job = await Job.findByIdAndDelete(id);
        res.status(200).json({ message: `The job with id ${id} has been deleted!` });
    } catch (err) {
        res.status(400).send({ error: `Delete error: ${err}` })
    }
};