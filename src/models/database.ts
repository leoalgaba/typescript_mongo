import { connect } from "mongoose"
import chalk from 'chalk'
import 'dotenv/config'

export const startconnect = async (): Promise<void> => {
    try {
        const db = await connect(`${process.env.MONGO_URI}`)
        console.log(`La base de datos ${ chalk.green (db.connection.name) } esta conectada localmente`)
    } catch (err) {
        console.error()
    }
}
