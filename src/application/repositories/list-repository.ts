import { List } from "../../domain/list";
import { ToDo } from "../../domain/todo";

export interface ListRepository {
    save(list: List): void;

    getTodos(list_id: string): Array<ToDo>

    update(list_id: string): List | null

    deleteList(list_id: string): boolean;
}