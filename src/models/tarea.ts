import { Schema, model } from 'mongoose'
import { Task } from '@/interfaces/tarea'

const schema = new Schema<Task>({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    hecho: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
)

export default model<Task>('Tarea', schema)
