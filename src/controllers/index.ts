import { Request, Response } from 'express'
import Tarea from '../models/tarea'

export const getTareas = async (req: Request, res: Response) => {
    const tareas = await Tarea.find()
    res.send(tareas)
}
export const postTareas = async (req: Request, res: Response) => {
    const tarea = new Tarea(req.body)
    await tarea.save()
    res.send(tarea)
}
export const getTarea = async (req: Request, res: Response) => {
    const tarea = await Tarea.findById(req.params.id)
    res.send(tarea)
}
export const delTarea = async (req: Request, res: Response) => {
    const { id } = req.params
    const tarea = await Tarea.findByIdAndDelete(id);
    res.send(tarea)
}
export const putTarea = async (req: Request, res: Response) => {
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    res.send(tarea)
}
