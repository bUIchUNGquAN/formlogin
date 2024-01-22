import {User} from "~/server/models/User"

import bcrypt from "bcrypt";

export default defineEventHandler(async(event)=>{
    
    const body = await readBody(event);
    
    if(!body.email || !body.username || !body.password){
        throw createError({
            statusCode:400,
            statusMessage:'bad Request',
            message:"missing requai fields"
        })
    }
    // const salt =await bcrypt.genSalt(10)
    // const hasedPassword = bcrypt.hash(body.password, salt)

    // const user = await User.create({...body,password:hasedPassword});

    // return {...user.toObject(),password:undefined}
    return {User}

    
})