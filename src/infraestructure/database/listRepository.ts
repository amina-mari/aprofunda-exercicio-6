import { ListRepository } from "../../application/repositories/list-repository";
import { List } from "../../domain/list";
import { ToDo } from "../../domain/todo";

export class listClassRepository implements ListRepository {
    save(list: List): void {
        throw new Error("Method not implemented.");
    }
    getTodos(list_id: string): ToDo[] {
        throw new Error("Method not implemented.");
    }
    update(list_id: string): List | null {
        throw new Error("Method not implemented.");
    }
    deleteList(list_id: string): boolean {
        throw new Error("Method not implemented.");
    }
    
}