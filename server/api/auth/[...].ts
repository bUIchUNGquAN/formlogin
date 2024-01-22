import {NuxtAuthHandler} from "#auth"
import CrendetialsProvider from 'next-auth/providers/credentials'
import {User} from "~/server/models/User"
import bcrypt from "bcrypt";
export default NuxtAuthHandler({
    secret:useRuntimeConfig().authSecret,

    pages:{
        signIn: "/login",
    },

    providers:[
        CrendetialsProvider.default({
            name:'crendentials',
            crendentials:{},
            async authorize(credentials:{
                username:string,
                password:string

            }) {
                const user =await User.findOne({username:credentials.username})

                

                if(!user){
                    throw createError({
                        statusCode:401,
                        statusMessage:"Aunauaid"
                    })
                }
                const isValid = await bcrypt.compare(credentials.password,user.password)
                
                if(!isValid){
                    throw createError({
                        statusCode:401,
                        statusMessage:"Aunauaid"
                    })
                }
                
                return{
                    ...user.toObject(),
                    password:undefined,
                }
            }
        })
    ],
    session:{
        strategy:'jwt',
    },
    callbacks:{
        async jws({token,user,account}){
            if(user){
                token={
                    ...token,
                    ...user
                }
            }
            return token;
        },
        async session({session,token}){
            session.user ={
                ...token,
                ...session.user,
            };
            return session;
        }
    }

})