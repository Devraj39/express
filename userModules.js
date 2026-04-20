const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type : String, required : true, default: "Sample Name"/* deafault name if feild left empty by user*/},
    _id : Number,
    age : Number,
    course : String,
    skills : [String],
    address : {
        city : String,
        pincode : Number,
    },
    isActive : Boolean,
    marks: [{
        subject : String,
        score : Number,
    }]
})

userSchema.pre("find", function(next){
    console.log("find query trigger");
    next;
});

userSchema.post("updateOne", function(){
    console.log("find query trigger");
    next;
});

const User = mongoose.model("User", userSchema) // user = users internally
module.exports = User
