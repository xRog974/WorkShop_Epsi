const express = require('express');
const router = express.Router();

const skillController = require('../controllers/skill.controller');

router.post('/', skillController.createSkill);
router.get('/', skillController.getAllSkill);
router.get('/getById', skillController.getSkillById);
router.patch('/updateById', skillController.updateSkillById);
router.delete('/deleteById', skillController.deleteSkillById);
module.exports = router;