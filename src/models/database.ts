import { connect } from "mongoose"
import chalk from 'chalk'

export const startconnect = async (): Promise<void> => {
    try {
        const db = await connect("mongodb://localhost/crud-database")
        console.log(`La base de datos ${ chalk.green (db.connection.name) } esta conectada localmente`)
    } catch (err) {
        console.error()
    }
}
