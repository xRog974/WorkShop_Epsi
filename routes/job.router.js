const express = require('express');
const router = express.Router();

const JobController = require('../controllers/job.controller');

router.get("/getAll", JobController.getAllJobs);
router.get("/getbyId", JobController.getJobById);
router.post("/create", JobController.createdJob);
router.put("/updateById", JobController.updateJobById);
router.delete('/deleteById', JobController.deleteJobById);

module.exports = router;