require('dotenv').config()


const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

//express app
const app = express();


//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
// app.get('/', (req, res) => {
//     res.json({mes: 'Welcome to the app'})
//     next();
// })


app.use('/api/workouts', workoutRoutes);





//connect to db

mongoose.connect(process.env.MONG_URI)
.then(() => {
    

//listen for request

app.listen(process.env.PORT, () => {
    console.log("connected to db & listening on port 4000!")
})

})
.catch((error) => {
    console.log(error);
})



