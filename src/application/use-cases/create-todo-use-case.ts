import { ToDo } from "../../domain/todo";
import { IdGenerator } from "../repositories/id-generator-interface";
import { ListRepository } from "../repositories/list-repository";
import { TodoRepository } from "../repositories/todo-repository";

export class CreateToDoUseCase {
    constructor(
        private todoRepository: TodoRepository,
        private idGenerator: IdGenerator
    ){}

    execute(todoParams: ToDo): ToDo{
        const todo: ToDo = {
            id: this.generateId(),
            list_id: "default",
            created_at: this.getDate(),
            deadline: todoParams.deadline,
            title: todoParams.title,
            description: todoParams.description,
            tags: todoParams.tags
        }

        this.todoRepository.save(todo)
        
        return todo;
    }

    private getDate() {
        return new Date().toLocaleDateString("pt-br")
    }

    private generateId() {
       return this.idGenerator.generate();
    }
}