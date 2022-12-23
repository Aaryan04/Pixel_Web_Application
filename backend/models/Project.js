const mongoose = require('mongoose')

var ProjectSchema = mongoose.Schema({
  clientId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  noAttachments: {
    type: String,
    default: 0,
  },
  noMembers: {
    type: Number,
    required: true,
  },
  noComments: {
    type: Number,
    default: 0,
  },
  progress: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
})
ProjectSchema.pre('save', function (next) {
  if (this.created_at === null) {
    this.created_at = Date.now
  }

  next()
})

module.exports = Project = mongoose.model('project', ProjectSchema)
