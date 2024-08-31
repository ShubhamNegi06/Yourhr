const dotenv = require('dotenv').config();
const express = require('express');
const dbconnection = require('./dbConnect')
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const usersRouter = require('./routes/userRoutes');
const jobsRouter = require('./routes/jobsRoutes');

app.use(express.json());
app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/jobs', jobsRouter);


app.listen(PORT, () => {
       dbconnection();
  console.log(`Server is running on port ${PORT}`);
});