const express = require('express')
const router = express.Router();

const employeeController = require('../app/controllers/EmployeeController')



router.get('/create', employeeController.create)
router.get('/:id/edit', employeeController.edit)
router.post('/store', employeeController.store)
router.post('/:id', employeeController.update)
router.get('/:id/delete', employeeController.delete)
router.get('/', employeeController.index)


module.exports = router;