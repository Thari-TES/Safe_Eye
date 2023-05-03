const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema({
  sectionOne: {
    headlineTitle: { type: String, required: false },
    subTitle_1: { type: String, required: false },
    subTitle_2: { type: String, required: false },
    subTitle_3: { type: String, required: false },
    image_1: { type: String, required: false },
    image_2: { type: String, required: false },
    image_3: { type: String, required: false },
  },
  sectionTwo: {
    headlineTitle: { type: String, required: false },
    paragraph: { type: String, required: false },
    name: { type: String, required: false },
  },
  sectionThree: {
    headlineTitle: { type: String, required: false },
    paragraph_1: { type: String, required: false },
    paragraph_2: { type: String, required: false },
  },
  sectionFour: {
    headlineTitle_1: { type: String, required: false },
    headlineTitle_2: { type: String, required: false },
    headlineTitle_3: { type: String, required: false },
    headlineTitle_4: { type: String, required: false },
    paragraph_1: { type: String, required: false },
    paragraph_2: { type: String, required: false },
    paragraph_3: { type: String, required: false },
    paragraph_4: { type: String, required: false },
  },
  sectionFive: {
    headlineTitle: { type: String, required: false },
    paragraph_1: { type: String, required: false },
    paragraph_2: { type: String, required: false },
  },
});

module.exports = mongoose.model("AboutUs", aboutUsSchema);
