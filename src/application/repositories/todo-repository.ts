import {ToDo} from '../../domain/todo'

export interface TodoRepository {
    save(todo: ToDo): void,
    
    getTodo(todo_id: string): ToDo | null,
    getTodayTodos(): Array<ToDo> | null,
    
    updateTodo(id: string, params: Partial<ToDo>): ToDo | null,
    
    deleteTodo(id: string): boolean; 
}