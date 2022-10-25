
const { mongooseToObject } = require('../../util/mongoose')
const { mutipleMongoosetoObject } = require('../../util/mongoose')

const Employee = require('../models/Employee');


class EmployeeController {
    index(req, res, next) {
        Employee.find({})
        .then(employees => {
        res.render('employee', {
            employees: mutipleMongoosetoObject(employees)
                });
            })
            .catch(next);
    }


    create(req, res, next) {
        res.render('employee/createEmployee')
    }

    store(req, res, next) {

        const employee = new Employee(req.body);
        employee.save()
            .then(() => res.redirect('/employee'))
            .catch(error => {

            })

    }


    edit(req, res, next) {
        Employee.findById(req.params.id)
            .then(employee => res.render('employee/editEmployee', {
                employee: mongooseToObject(employee)
            }))
    }


    update(req, res, next){
        Employee.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/employee'))
        .catch(next)
      }

      delete(req, res, next){
        Employee.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {
                res.redirect('/employee');
            }
            else {
                console.log("An error occured during the Delete Process" + err);
            }
        })
      }

}

module.exports = new EmployeeController;