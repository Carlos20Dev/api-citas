import { config } from "dotenv";
config();

export default {
    port: process.env.PORT || 3000,
    dbuser: process.env.DB_USER || '',
    dbpassword: process.env.DB_PASSWORD || '',
    server: process.env.DB_SERVER || '',
    database: process.env.DB_DATABASE || '',
}