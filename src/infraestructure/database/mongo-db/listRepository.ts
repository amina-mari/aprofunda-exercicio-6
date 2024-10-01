import { List } from "../../../domain/list";
import { ToDo } from "../../../domain/todo";
import { ListRepository } from "../../../application/repositories/list-repository";
import { ListModel } from "./list-model";

export class ListClassRepository implements ListRepository{
    
    async save(list: List): Promise<void> {
        const newList = new ListModel(list);
        await newList.save();
    }

    async getTodos(list_id: string): Promise<Array<ToDo>> {
        throw new Error("Method not implemented.");
    }
    async update(list_id: string): Promise<List |null> {
        throw new Error("Method not implemented.");
    }
    async deleteList(list_id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}