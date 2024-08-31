const express = require('express');
const router = express.Router();
const Job = require('../models/jobs');

// Get all jobs
router.get('/', async (req, res) => { // Adjusted path to match '/api/jobs' if using the routes setup
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new job
router.post('/', async (req, res) => { // Adjusted path to match '/api/jobs'
  const { title, company, location, description } = req.body;

  // Validate input
  if (!title || !company || !location || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const job = new Job({
    title,
    company,
    location,
    description
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
