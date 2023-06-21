//Server

const express = require("express");
const mongoose = require('mongoose');

const UserRoutes = require ('./app/Routers/UserRoutes');
const LogRoutes = require ('./app/Routers/logRoutes');
const CourseRoutes = require ('./app/Routers/CourseRoutes');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',UserRoutes);
app.use('/api',LogRoutes);
app.use('/api',CourseRoutes);

mongoose.connect('mongodb+srv://digitcom23:StWLqtbEO0UQMDEN@digitcomcluster.q7xsbfu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then((res) => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Running on port 3000!');
    });
}).catch((err) => {
    console.log(err);
});
