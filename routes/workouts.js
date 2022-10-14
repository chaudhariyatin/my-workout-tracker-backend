const express = require("express");
const { createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout } = require("../controllers/workoutController");

const router = express.Router();
//get all workouts
router.get("/", getAllWorkouts);

//get single workout

router.get('/:id', getWorkout);

//post new workout 

router.post('/', createWorkout);
//delete workout
router.delete('/:id', deleteWorkout)
//update a workout
router.patch('/:id', updateWorkout)

module.exports = router;
