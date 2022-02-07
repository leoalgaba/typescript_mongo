import { Request, Response } from 'express'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTareas = async (req: Request, res: Response) => {
    // obteniendo tareas
    const resultado = await prisma.post.findMany()
    res.json(resultado)
    console.log(resultado)
}
export const postTareas = async (req: Request, res: Response) => {
    // creando tareas
    const { Titulo, Descripcion } = req.body
    const titulo = Titulo.trim()
    const descripcion = Descripcion.trim()
    const resultado = await prisma.post.create({
    data: { titulo, descripcion}
    })
    res.json(resultado)
}
export const getTarea = async (req: Request, res: Response) => {
    // obteniendo una sola tarea
    const { id } = req.params
    const resultado = await prisma.post.findUnique({
        where: { id },
    })
    res.send(resultado)
}
export const delTarea = async (req: Request, res: Response) => {

    res.send('borrar tarea')
}
export const putTarea = async (req: Request, res: Response) => {

    res.send('actualizar tarea')
}
