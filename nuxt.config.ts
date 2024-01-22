// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui','nuxt-server-utils', '@sidebase/nuxt-auth'],

  runtimeConfig:{
    authSecret: process.env.AUTH_SECRET,
  },

  nuxtServerUtils:{
    mongodbUri:process.env.MONGODB_URI
  },

  auth:{
    baseURL:process.env.AUTH_ORIGIN,
    provider:{
      type:'authjs'
    }
  }

})
