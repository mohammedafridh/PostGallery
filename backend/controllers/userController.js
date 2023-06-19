import UserModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn:'3d'})
}

export const registerUser = async(req,res)=>{
    const{username,password,name,image} = req.body

    const exists = await UserModel.findOne({username})
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    try{
        if(!username || !password || !name){
            throw Error('*All fields must be filled!')
        }
        if(exists){
            throw Error('*Username already taken!')
        }
        if(!validator.isStrongPassword(password)){
            throw Error('*Password is not strong enough. Password must be more than 6 digits, minimum 1 uppercase, 1 lowercase, 1 number and 1 symbol')
        }
        else{
            const user = await UserModel.create({username,password:hash,name,image})
            const token = createToken(user._id)
            res.status(200).json({user,token})
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

export const loginUser = async(req,res)=>{
    const{username,password} = req.body

    const user = await UserModel.findOne({username})

    try{
        if(!username || !password){
            throw Error('*Please fill all the fields!')
        }
        if(!user){
            throw Error('*Account doesnt exist!')
        }
        const match = await bcrypt.compare(password,user.password)
        if(!match){
            throw Error('*Password is incorrect!')
        }else{
            const token = createToken(user._id)
            res.status(200).json({user,token})
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// View User
export const viewUser = async(req,res)=>{
    const id = req.params.id

    try{
        const profile = await UserModel.findById(id)
        res.status(200).json(profile)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// Update User
export const updateUser = async(req,res)=>{
    const {username,password,name,image} = req.body
    const id = req.params.id

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    try{
        if(!validator.isStrongPassword(password)){
            throw Error('*Password is not strong enough. Password must be more than 6 digits, minimum 1 uppercase, 1 lowercase, 1 number and 1 symbol')
        }else{
        const user = await UserModel.findByIdAndUpdate(id, {username,password:hash,name,image},{new:true} )
        res.status(200).json(user)}
    }catch(error){
        res.status(500).json({error:error.message})
    }
}