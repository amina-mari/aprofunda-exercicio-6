import { List } from "../../domain/list";
import { ToDo } from "../../domain/todo";

export interface ListRepository {
    save(list: List): Promise<void>;

    getTodos(list_id: string): Promise<Array<ToDo>>

    update(list_id: string): Promise<List |null>

    deleteList(list_id: string): Promise<boolean>;
}