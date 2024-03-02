import express from 'express';
import {healthCheck} from '../handlers/healthcheck';
import { Todo } from '../controller/todo.controller';

const router = express.Router();

/* GET home page. */
router.get('/', healthCheck);
router.get("/todo/:id", Todo.fetchSpecificToDo);

export default router;
