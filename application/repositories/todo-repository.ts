import { ToDo } from "../../domain/todo";

export interface TodoRepository {
    save(todo: ToDo): void,
    
    getTodo(todo_id: string): ToDo | null,
    getTodayTodos(): Array<ToDo> | null,
    getUserTodayTodos(user_id: string): Array<ToDo> | null,
    getListTodos(list_id): Array<ToDo> | null
    getUserTodos(user_id: string): Array<ToDo> | null,
    
    updateTodo(id: string, params: Partial<ToDo>): ToDo | null,
    
    deleteTodo(id: string): boolean;
    
}