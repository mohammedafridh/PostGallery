import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:String
},
    {timestamps:true}
)

const UserModel = mongoose.model('users', UserSchema)
export default UserModel

