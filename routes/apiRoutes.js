const router = require ("express").Router();
const db = require("../models");

router.get("/api/workouts", async (req, res) => {
  console.log("got to the router")
  const allWorkouts = await db.Workout.find({});
  res.json(allWorkouts);
});

router.put("/api/workouts/:id", async ( req, res) => {
const workoutID = req.params.id
const newExercise = req.body
console.log(workoutID)
const idQuery = {
  _id: workoutID
}
const update = {
  $push: {
    exercises: newExercise
  }
}
  const updatedWorkout = await db.Workout.findByIdAndUpdate(idQuery, update)
  res.json(updatedWorkout)

});

router.post("/api/workouts", async (req, res) => {
    const newWorkout = await db.Workout.create({})
  
    res.json(newWorkout)
    
  });

router.get("/api/workouts/range", async (req, res) => {
  const allWorkouts = await db.Workout.find({})
  res.json(allWorkouts)
});

module.exports = router;