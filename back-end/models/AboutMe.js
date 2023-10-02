const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AboutSchema = new Schema(
  {
    about: {
      type: String,
      required: true,
    },
    imageUrl: {
          type: String
    }
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const About = mongoose.model('About', AboutSchema, 'About');

// export the model so other modules can import it
module.exports = {
          About,
}