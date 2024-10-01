import { CreateListUseCase } from "../../application/use-cases/create-list-use-case";
import { DeleteListUseCase } from "../../application/use-cases/delete-list-use-case";
import { UpdateListUseCase } from "../../application/use-cases/update-todo-list-use-case";
import { ListController } from "../../interface/listController";
import { ToDoController } from "../../interface/todoControler";
import { UserController } from "../../interface/userController";
import { ListClassRepository } from "../database/mongo-db/listRepository";


export function configureDependencies () {
    const listRepository = new ListClassRepository();
    const createListUseCase = new CreateListUseCase(listRepository);
    const deleteListUseCase = new DeleteListUseCase();
    const updateListUseCase = new UpdateListUseCase()

    const todoController = new ToDoController();
    const listController = new ListController(createListUseCase, deleteListUseCase, updateListUseCase);
    const userController = new UserController();
    
    return {
        todoController, listController, userController
    }

}