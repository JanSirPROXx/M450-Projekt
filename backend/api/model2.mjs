

import mongoose from 'mongoose';


import mongoose from 'mongoose';

const surveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  isText: {
    type: Boolean,
    required: true,
  },
  options: {
    type: [String], // Array von Strings
    default: [],
  },
  id: {
    type: String,
    required: true,
  },
});

const model = mongoose.model('surveys', surveySchema);

export { model };