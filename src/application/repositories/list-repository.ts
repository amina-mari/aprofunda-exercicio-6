import { List } from "../../domain/list";
import { ToDo } from "../../domain/todo";

export interface ListRepository {
    save(list: List): void;

    getTodos(): Array<ToDo>

    deleteList(id: string): boolean;
}