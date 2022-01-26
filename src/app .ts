import express, { Application } from 'express'

class Server {
    app: Application
    port: string

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '8000'
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port} ⚡`)
})
    }
}

export default Server
