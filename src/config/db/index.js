const mongoose = require('mongoose');


async function connect(){
    try {
     await mongoose.connect('mongodb+srv://phuc2002:Admin12345@cluster0.ndqnatr.mongodb.net/ATN_Shop', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
     });
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect fail')
    }

}

module.exports = {connect};