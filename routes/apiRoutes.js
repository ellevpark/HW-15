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

router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.create( "/api/workouts", ({ body }, res)=> {
    Workout.create(body)
        .then(dbWorkout => {
         console.log(dbWorkout);
  })
    .catch(err => {
    res.status(400).json(err);
  });
  });

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout =>{
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
      });
});

module.exports = router;