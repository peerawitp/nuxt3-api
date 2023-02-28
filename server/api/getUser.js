import { Sequelize, QueryTypes } from 'sequelize'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const sequelize = new Sequelize(
    runtimeConfig.dbName,
    runtimeConfig.dbUser,
    runtimeConfig.dbPassword,
    {
      host: runtimeConfig.dbHost,
      dialect: 'mysql', // db type
    }
  )

  // just testing not a good use case
  const users = await sequelize.query('SELECT * FROM `user`', {
    type: QueryTypes.SELECT,
  })

  return {
    users,
  }
})
