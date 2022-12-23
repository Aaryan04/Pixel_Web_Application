const mongoose = require('mongoose')

const invoiceSchema = mongoose.Schema({
  clientId: {
    type: String,
    required: true,
  },
  projetName: {
    type: String,
    required: true,
  },
  dateStart: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  dateEnd: {
    type: Date,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})

module.exports = Invoice = mongoose.model('invoice', invoiceSchema)
