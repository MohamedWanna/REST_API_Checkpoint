const mongoose= require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name:
    { 
        type:String,
        required:true
    },
    age: Number,
    address: String,
    phone: Number,
    email: {
        type: String,
        lowercase: true, // Always convert `email` to lowercase
        unique: true
    },
    
});
const userModel = mongoose.model('users', userSchema);

module.exports = userModel