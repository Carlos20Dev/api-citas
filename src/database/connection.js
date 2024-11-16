import sql from 'mssql'
import config from '../config'

const dbConfig = {
    user : config.dbuser,
    password : config.dbpassword,
    server : config.server,
    database : config.database,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
}


export async function getConnection() {
    try {
        const resp = await sql.connect(dbConfig)
        console.log('Conectado a la base de datos')
        return resp
    } catch (error) {
        console.log(error)
    }
}

export { sql }