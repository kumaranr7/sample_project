const express = require("express");
const routes = express.Router();
const Car = require("../models/Car");

//Get all car details
routes.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get one car deails by ID
routes.get("/:carId", async (req, res) => {
  try {
    const carInfo = await Car.findById(req.params.carId);
    res.json(carInfo);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create car details
routes.post("/", async (req, res) => {
  const car = new Car({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
  });

  try {
    const savedCar = await car.save();
    res.json(savedCar);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete car details
routes.delete("/:carID", async (req, res) => {
  try {
    const removedCar = await Car.remove({ _id: req.params.carID });
    res.json(removedCar);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update car details
routes.patch("/:carId", async (req, res) => {
  try {
    const updatedCar = await Car.updateOne(
      { _id: req.params.carId },
      {
        $set: {
          make: req.body.make,
          model: req.body.model,
          year: req.body.year,
        },
      }
    );

    res.json(updatedCar);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = routes;
