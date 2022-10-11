const { Skill } = require('../models/skill.model');

module.exports.createSkill = async (req, res) => {
    const { name, category, tag, userId } = req.body;

    try {
        const skill = await Skill.create({ name, category, tag, userId });
        res.status(201).json({ skill: skill._id })
    } catch (err) {
        res.status(400).send({ error: "Skill not created!" });
    }
};

module.exports.getAllSkill = async (req, res) => {
    try {
        const skillList = await Skill.find();
        res.status(200).json({ skillList: skillList });
    } catch (err) {
        res.status(400).send({ error: 'Skill Collection not fetched' });
    }
};

module.exports.getSkillById = async (req, res) => {
    const { id } = req.body;

    try {
        const skill = await Skill.findOne({ id });
        res.status(200).json({ skill: skill })
    } catch (err) {
        res.status(400).send({ error: `No skill found with id ${id}` });
    }
};

module.exports.updateSkillById = async (req, res) => {
    const { id, name, category, tag } = req.body;

    const skill = await Skill.findById(id);

    if (!skill) {
        res.status(404).send({ error: `No skill found with id ${id}` });
        return;
    }

    const update = {
        name: name ? name : skill.name,
        category: category ? category : skill.category,
        tag: tag ? tag : skill.tag
    };

    try {
        const skill = await Skill.updateOne({ _id: id }, update);
        res.status(200).json({ skill: skill });
    } catch (err) {
        res.status(400).send({ error: 'No skill updated!' });
    }
}

module.exports.deleteSkillById = async (req, res) => {
    const { id } = req.body;
    try {
        const skill = await Skill.findByIdAndDelete(id);
        res.status(200).json({ message: `Skill with id ${id} has been deleted!` });
    } catch (err) {
        res.status(400).send({ error: `The skill with id ${id} has not been deleted!` });
    }
}