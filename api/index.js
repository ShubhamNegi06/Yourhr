const dotenv = require('dotenv').config();
const express = require('express');
const dbconnection = require('./dbConnect')
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const usersRouter = require('./routes/userRoutes');
const jobsRouter = require('./routes/jobsRoutes');
const bodyParser = require("body-parser");
const { body } = require('express-validator');
dbconnection();
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Call the next middleware or route handler
});

app.use(express.json());
app.use(bodyParser.json()),
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/jobs', jobsRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});