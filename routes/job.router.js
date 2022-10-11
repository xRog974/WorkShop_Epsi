const express = require('express');
const router = express.Router();

const JobController = require('../controllers/job.controller');

router.get("/", JobController.getAllJobs);
router.get("/byId", JobController.getJobById);
router.post("/createJob", JobController.createdJobs)
router.put("/updateJob", JobController.updateJobs)

module.exports = router;