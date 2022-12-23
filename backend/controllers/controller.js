const Client = require('../models/Client')
const Invoice = require('../models/Invoice')
const Project = require('../models/Project')
const Task = require('../models/Task')
exports.create = async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    email,
    password,

    phoneNumber,
    role,
    birthDate,
    companyName,
    bio,
    adress,
    permission,
  } = req.body

  try {
    let client = new Client({
      firstName,
      lastName,
      username,
      email,
      password,
      phoneNumber,
      role,
      birthDate,
      companyName,
      bio,
      adress,
    })
    await client.save()
    console.log('saved')
    res.send('Saved')
  } catch (error) {
    console.log('Error :', error)
  }
}

exports.findByID = async (req, res) => {
  try {
    await Client.findById(req.params.id, {}).then((result) => {
      res.send(result)
    })
  } catch (error) {
    console.log(error)
  }
}

exports.getClients = async (req, res) => {
  try {
    await Client.find().then((result) => {
      res.send(result)
    })
  } catch (error) {
    console.log(error)
  }
}

exports.createInvoice = async (req, res) => {
  const { projetName, dateEnd, amount, status } = req.body
  try {
    let invoice = new Invoice({
      projetName,
      dateEnd,
      amount,
      status,
    })
    await invoice.save()
    res.send('saved')
  } catch (error) {
    console.error(error)
  }
}

exports.getInvoices = async (req, res) => {
  try {
    let id = req.params.id
    await Invoice.find({ clientId: id }).then((result) => {
      res.send(result)
    })
  } catch (error) {
    console.log(error)
  }
}

exports.addTask = async (req, res) => {
  const { clientId, projectName, status, description } = req.body
  try {
    let task = new Task({
      clientId,
      projectName,
      status,
      description,
    })
    await task.save()
    res.send('saved')
  } catch (error) {
    console.log(error)
  }
}

exports.getTasks = async (req, res) => {
  try {
    let id = req.params.id
    await Task.find({ clientId: id }).then((result) => {
      res.send(result)
    })
  } catch (error) {
    console.log(error)
  }
}

exports.addProject = async (req, res) => {
  var {
    clientId,
    category,
    noAttachments,
    noMembers,
    noComments,
    progress,
    created_at,
    duration,
  } = req.body
  if (!created_at) {
    created_at = Date.now()
  }
  if (!noAttachments) {
    noAttachments = 0
  }
  if (!noComments) {
    noComments = 0
  }
  try {
    let project = new Project({
      clientId,
      category,
      noAttachments,
      noMembers,
      noComments,
      progress,
      duration,
      created_at,
    })

    await project.save()
    res.send('saved')
  } catch (error) {
    console.error(error)
  }
}

exports.getProjects = async (req, res) => {
  try {
    let id = req.params.id
    Project.find({ clientId: id }).then((result) => {
      res.send(result)
    })
  } catch (error) {
    console.log(error)
  }
}
exports.deleteClient = async (req, res) => {
  try {
    Client.delete({ _id: req.params.id })
  } catch (error) {
    console.log(error)
  }
}
