// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    dbName: process.env.NUXT_DB_NAME, // database name
    dbUser: process.env.NUXT_DB_USER,
    dbPassword: process.env.NUXT_DB_PASS,
    dbHost: process.env.NUXT_DB_HOST,
  },
})
