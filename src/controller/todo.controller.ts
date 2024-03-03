import { handleError } from "../helpers/error";
import { getRequest } from "../utils/axios";
import { JSON_API_URL } from "../utils/constants";

export class Todo {

    constructor() { }

    static async fetchToDos(_req: any, res: any) {
        try {
            const todos: Array<any> = [];
            
            // Fetch the first 20 even-numbered TODOs
            for (let i = 2; i <= 40; i += 2) {
                const response = await getRequest(`${JSON_API_URL}/${i}`);
                todos.push(response.data);
            }
            for (const todo of todos) {
                const completed = todo.completed ? 'Completed' : 'Incomplete';
                todo.completed = completed;
            }

            res.send(todos);
        } catch (error) {
            handleError(error, res);
        }
    }

    static async fetchSpecificToDo(req: any, res: any) {
        try {
            const id: number | string = req.params.id;
            const response = await getRequest(`${JSON_API_URL}/${id}`);
            const completed = response?.data?.completed ? "Completed" : "Incomplete";
            res.send({
                ...response?.data,
                completed,
            });
        } catch (error) {
            handleError(error, res);
        }
    }

};
