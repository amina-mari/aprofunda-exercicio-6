import { List } from "../../domain/list";
import { IdGenerator } from "../repositories/id-generator-interface";
import { ListRepository } from "../repositories/list-repository";


export class CreateListUseCase {
    constructor(
        private listRepository: ListRepository,
        
    ) {}

    execute(listParams: List): List {
        const list: List = {
            id: "",
            name: listParams.name
        }

        this.listRepository.save(list);
        return list;
    }
}