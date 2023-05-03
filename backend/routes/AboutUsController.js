const express = require("express");
const router = express.Router();

var AboutUs = require("../models/AboutUs");

router.get("/sectionOne", async (req, res, next) => {
  try {
    const { sectionOne } = await AboutUs.findOne({}, { sectionOne: 1 });
    res.json(sectionOne);
  } catch (err) {
    next(err);
  }
});

router.get("/sectionTwo", async (req, res, next) => {
  try {
    const { sectionTwo } = await AboutUs.findOne({}, { sectionTwo: 1 });
    res.json(sectionTwo);
  } catch (err) {
    next(err);
  }
});

router.post("/update/sectionOne", async (req, res) => {
  try {
    const updatedAboutUs1 = await AboutUs.findOneAndUpdate(
      {},
      { sectionOne: req.body.sectionOne },
      { new: true }
    );
    res.status(200).json(updatedAboutUs1);
  } catch (err) {
    console.error(err);
  }
});

router.post("/update/sectionTwo", async (req, res) => {
  try {
    const updatedAboutUs2 = await AboutUs.findOneAndUpdate(
      {},
      { sectionTwo: req.body.sectionTwo },
      { new: true }
    );
    res.status(200).json(updatedAboutUs2);
  } catch (err) {
    console.error(err);
  }
});

router.get("/sectionThree", async (req, res, next) => {
  try {
    const { sectionThree } = await AboutUs.findOne({}, { sectionThree: 1 });
    res.json(sectionThree);
  } catch (err) {
    next(err);
  }
});
router.post("/update/sectionThree", async (req, res) => {
  try {
    const updatedAboutUs3 = await AboutUs.findOneAndUpdate(
      {},
      { sectionThree: req.body.sectionThree },
      { new: true }
    );
    res.status(200).json(updatedAboutUs3);
  } catch (err) {
    console.error(err);
  }
});

router.get("/sectionFour", async (req, res, next) => {
  try {
    const { sectionFour } = await AboutUs.findOne({}, { sectionFour: 1 });
    res.json(sectionFour);
  } catch (err) {
    next(err);
  }
});

router.post("/update/sectionFour", async (req, res) => {
  try {
    const updatedAboutUs4 = await AboutUs.findOneAndUpdate(
      {},
      { sectionFour: req.body.sectionFour },
      { new: true }
    );
    res.status(200).json(updatedAboutUs4);
  } catch (err) {
    console.error(err);
  }
});

router.get("/sectionFive", async (req, res, next) => {
  try {
    const { sectionFive } = await AboutUs.findOne({}, { sectionFive: 1 });
    res.json(sectionFive);
  } catch (err) {
    next(err);
  }
});

router.post("/update/sectionFive", async (req, res) => {
  try {
    const updatedAboutUs5 = await AboutUs.findOneAndUpdate(
      {},
      { sectionFive: req.body.sectionFive },
      { new: true }
    );
    res.status(200).json(updatedAboutUs5);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
