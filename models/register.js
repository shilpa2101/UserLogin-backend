const mongoose = require( "mongoose")
const schema = mongoose.Schema(
    {
            "name":{type:String,required:true},
            "dob":{type:String,required:true},
            "bloodgroup":String,
            "mob":{type:String,required:true},
            "address":{type:String,required:true},
            "pincode":{type:String,required:true},
            "district":String,
            "place":String,
            "email":{type:String,required:true},
            "username":{type:String,required:true},
            "password":{type:String,required:true},
            "confirmpassword":{type:String,required:true}

    }
)
let regmodel=mongoose.model("registrations",schema);
module.exports={regmodel}