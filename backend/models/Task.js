const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  clientId: {
    type: String,
    required: true,
  },

  projectName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = Task = mongoose.model('task', taskSchema)
