const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  permission: {
    type: [String],
  },
})

module.exports = Client = mongoose.model('client', clientSchema)
