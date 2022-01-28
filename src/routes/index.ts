import { Router, Request, Response } from "express"
const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('obteniendo tareas')
})
router.post('/', (req: Request, res: Response) => {
    res.send('creando tareas')
})
router.get('/:id', (req: Request, res: Response) => {
    res.send('obteniendo una sola tarea')
})
router.delete('/:id', (req: Request, res: Response) => {
    res.send('borrando una tarea')
})
router.put('/:id', (req: Request, res: Response) =>{
    res.send('actualizando una tarea')
})

export default router