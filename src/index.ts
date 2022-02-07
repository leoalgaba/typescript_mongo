import Server from './app '
import { config } from 'dotenv'

config()


const server = new Server()

server.start()