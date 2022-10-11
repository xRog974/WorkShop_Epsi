const express = require('express');
const router = express.Router();

const SkillController = require('../controllers/skill.controller');

router.get('/getAll', SkillController.getAllSkills);
router.get('/getById', SkillController.getSkillById);
router.post('/create', SkillController.createSkill);
router.put('/updateById', SkillController.updateSkillById);
router.delete('/deleteById', SkillController.deleteSkillById);

module.exports = router;