const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    fullname:{
        type:String ,
        required:true
    },
    email:{
        type:String ,
        required:true,
        unique:true
    },
    password:{
        type:String ,
        required:true

    },
    confirmpassword:{
        type:String ,
        required:true
    }

})

// now we need to create collection
const Register = new mongoose.model("Register", employeeSchema);

module.exports =  Register;