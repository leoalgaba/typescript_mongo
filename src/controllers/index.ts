import { Request, Response } from 'express'

export const getTareas = async (req: Request, res: Response) => {
    // obteniendo tareas
    res.send('obteniendo tareas')
}
export const postTareas = async (req: Request, res: Response) => {
    // creando tareas
    res.send('creando tareas')
}
export const getTarea = async (req: Request, res: Response) => {
    // obteniendo una sola tarea
    res.send('obteniendo una sola tarea')
}
export const delTarea = async (req: Request, res: Response) => {
    // borrando una tarea
    res.send('borrando una tarea')
}
export const putTarea = async (req: Request, res: Response) => {
    // actualizando una tarea
    res.send('actualizando una tarea')
}
