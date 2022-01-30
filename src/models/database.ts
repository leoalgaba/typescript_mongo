import { connect } from "mongoose"

export const startconnect = async (): Promise<void> => {
    try {
        const db = await connect("mongodb://localhost/crud-database")
        console.log(`La base de datos ${db.connection.name} esta conectada localmente`)
    } catch (err) {
        console.error()
    }
}
