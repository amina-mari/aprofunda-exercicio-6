import { TodoRepository } from "../../application/repositories/todo-repository";
import { ToDo } from "../../domain/todo";

export class ToDoClassRepository implements TodoRepository {
    save(todo: ToDo): void {
        throw new Error("Method not implemented.");
    }
    getTodo(todo_id: string): ToDo | null {
        throw new Error("Method not implemented.");
    }
    getTodayTodos(): ToDo[] | null {
        throw new Error("Method not implemented.");
    }
    updateTodo(id: string, params: Partial<ToDo>): ToDo | null {
        throw new Error("Method not implemented.");
    }
    deleteTodo(id: string): boolean {
        throw new Error("Method not implemented.");
    }
    
}