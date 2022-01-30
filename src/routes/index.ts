import { Router } from "express"
import { getTareas, postTareas, getTarea, delTarea, putTarea } from '../controllers'

const router = Router()

// obteniendo tareas
router.get('/', getTareas)

// creando tareas
router.post('/', postTareas)

// obteniendo una sola tarea
router.get('/:id', getTarea)

// borrando una tarea
router.delete('/:id', delTarea)

// actualizando una tarea
router.put('/:id', putTarea)

export default router