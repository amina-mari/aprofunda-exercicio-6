import { CreateListUseCase } from "../../application/use-cases/create-list-use-case";
import { DeleteListUseCase } from "../../application/use-cases/delete-list-use-case";
import { getListTodosUseCase } from "../../application/use-cases/get-list-todos-use-case";
import { UpdateListUseCase } from "../../application/use-cases/update-todo-list-use-case";
import { ListController } from "../../interface/listController";
import { ToDoController } from "../../interface/todoControler";
import { UserController } from "../../interface/userController";
import { ListClassRepository } from "../database/mongo-db/listRepository";


export function configureDependencies () {
    const listRepository = new ListClassRepository();
    const deleteListUseCase = new DeleteListUseCase();
    const updateListUseCase = new UpdateListUseCase();

    const createListUseCase = new CreateListUseCase(listRepository);
    const getTodosUseCase = new getListTodosUseCase(listRepository);
    

    const todoController = new ToDoController();
    const listController = new ListController(createListUseCase, deleteListUseCase, updateListUseCase, getTodosUseCase);
    const userController = new UserController();
    
    return {
        todoController, listController, userController
    }
}