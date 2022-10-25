
const proRouter = require('./product')
const categoryhRoute = require('./category')
const LoginRoute = require('./login')
const registerRoute = require('./register')
const employeeRoute = require('./employee')


function route(app){

    
    app.use('/product', proRouter);
    app.use('/category', categoryhRoute);
    app.use('/login', LoginRoute);
    app.use('/register', registerRoute);
    app.use('/employee', employeeRoute);
    app.use('/', LoginRoute);

    
    



}

module.exports = route;