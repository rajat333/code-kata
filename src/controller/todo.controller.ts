import { getRequest } from "../utils/axios";

export class Todo {

    constructor() { }

    static async fetchToDos(_req: any, res: any) {
        const todos: Array<any> = [];

        // Fetch the first 20 even-numbered TODOs
        for (let i = 2; i <= 40; i += 2) {
            const response = await getRequest(`https://jsonplaceholder.typicode.com/todos/${i}`);
            todos.push(response.data);
        }
        for (const todo of todos) {
            const completed = todo.completed ? 'Completed' : 'Incomplete';
            todo.completed = completed;
        }

        res.send(todos);
    }

    static async fetchSpecificToDo(req: any, res: any) {
        const id: number | string = req.params.id;
        const response = await getRequest(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const completed = response?.data?.completed ? "Completed" : "Incomplete";
        res.send({
            ...response?.data,
            completed,
        });
    }

};
