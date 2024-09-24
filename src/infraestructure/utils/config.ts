import { ListController } from "../../interface/listController";
import { ToDoController } from "../../interface/todoControler";
import { UserController } from "../../interface/userController";


export function configureDependencies () {
    const todoController = new ToDoController();
    const listController = new ListController();
    const userController = new UserController();
    
    return {
        todoController, listController, userController
    }

}