import { Router } from 'express'
import { getTodos, addTodo, getTodoById, updateTodoById, deleteTodoById } from './todos.controller';

const router = Router();

router.get('/', getTodos)
router.post('/', addTodo)
router.get('/:todo_id', getTodoById)
router.put('/:todo_id', updateTodoById)
router.delete('/:todo_id', deleteTodoById)

export default router;