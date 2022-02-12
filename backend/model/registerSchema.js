const mongoose=require("mongoose");

const registerSchema=new mongoose.Schema({
    FullName:{
        type:String,
        require:true
    },
    UserName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    PhoneNumber:{
        type:Number,
        require:true
    },
    Age:{
        type:Number,
        require:true
    },
    Gender: {
        type: String,
        enum: ["male", "female","Male","Female"]
    },
    Password:{
        type:String,
        require:true
    },
    Adress:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now()
    }

})


module.exports=mongoose.model("regtable",registerSchema);