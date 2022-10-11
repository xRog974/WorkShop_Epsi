const { Skill } = require('../models/skill.model');

module.exports.createSkill = async (req, res) => {
    const { name, category, tag } = req.body;

    try {
        const skill = await Skill.create({ name, category, tag });
        res.status(201).json({ skill: skill._id })
    } catch (err) {
        res.status(400).send({ error: "Skill not created!" });
    }
};

module.exports.getSkillById = async (req, res) => {
    const { id } = req.body;

    try {
        const skill = await Skill.findOne({ id });
        res.status(200).json({ skill: skill })
    } catch (err) {
        res.status(400).send({ error: "Skill not found!" });
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


