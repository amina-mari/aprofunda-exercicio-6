import { ListRepository } from "../repositories/list-repository";

export class getListTodosUseCase {
    constructor(
        private listRepository: ListRepository
    ){}

    execute(listId: string){
        const toDos = this.listRepository.getTodos(listId);
        return toDos;
    }
}