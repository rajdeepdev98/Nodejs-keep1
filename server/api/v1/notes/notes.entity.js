const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define the noteSchema model
const NoteSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  state: {
    type: String,
    default: 'not-started'
  },
  userId: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now()
  },
  modifiedOn: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('notes', NoteSchema);
