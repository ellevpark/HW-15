const router = require ("express").Router();
const db = require("../models");

router.get("/api/workouts", function(req, res){
    console.log("got to the router")
    db.Workout.find({})
    .then(dbWorkout =>{
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
      });
});

module.exports = router;