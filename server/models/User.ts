import {Schema,model } from 'mongoose'

export interface UserDocument extends Document{
    email:string,
    username:string,
    password:string
}

const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },

    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },

    password:{
        type: String,
        required:true,
        length:[8, "pass must be at leatst 8 char long"]
    }
});

export const User = model<UserDocument>("User" ,UserSchema)