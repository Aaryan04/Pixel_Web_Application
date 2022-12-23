const express = require('express')
const route = express.Router()
const controller = require('../controllers/controller')

route.get('/', (req, res) => {
  res.render('index')
})
route.get('/client/:id', controller.findByID)
route.get('/clients', controller.getClients)
route.get('/invoices/:id', controller.getInvoices)
route.get('/tasks/:id', controller.getTasks)
route.get('/projects/:id', controller.getProjects)
route.delete('/clients/:id', controller.deleteClient)

route.post('/add-invoice', controller.createInvoice)
route.post('/add-client', controller.create)
route.post('/add-task', controller.addTask)
route.post('/add-project', controller.addProject)

module.exports = route
