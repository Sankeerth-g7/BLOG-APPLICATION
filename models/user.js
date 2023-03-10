const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
    username:{
        type: String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})

const User = mongoose.model('User',userSchema);

module.experts = User;