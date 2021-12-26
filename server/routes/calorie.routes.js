const router = require("express").Router();
let Calorie = require("../models/calorie.model.js");

router.route("/").get((req, res) => {
    Calorie.find()
        .then((meals) => res.json(meals))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const calories = Number(req.body.calories);
    const date = Date.parse(req.body.date);

    const addCalorie = new Calorie({
        username,
        description,
        calories,
        date,
    });

    addCalorie
        .save()
        .then(() => res.json("Calories Added Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
});