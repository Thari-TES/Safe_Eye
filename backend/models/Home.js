const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  sectionOne: {
    headlineTitle: { type: String, required: false },
    subTitle_1: { type: String, required: false },
    subTitle_2: { type: String, required: false },
  },
  sectionTwo: {
    headlineTitle: { type: String, required: false },
    paragraph_1: { type: String, required: false },
    paragraph_2: { type: String, required: false },
    paragraph_3: { type: String, required: false },
    image_1: { type: String, required: false },
    image_2: { type: String, required: false },
    image_3: { type: String, required: false },
  },
  sectionThree: {
    image_1: { type: String, required: false },
    headlineTitle_1: { type: String, required: false },
    paragraph_1: { type: String, required: false },
    paragraph_2: { type: String, required: false },
    paragraph_3: { type: String, required: false },
  },
});

module.exports = mongoose.model("Home", HomeSchema);
