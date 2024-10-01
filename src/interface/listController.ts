import { Request, Response } from 'express';
import { CreateListUseCase } from "../application/use-cases/create-list-use-case";
import { DeleteListUseCase } from "../application/use-cases/delete-list-use-case";
import { UpdateListUseCase } from "../application/use-cases/update-todo-list-use-case";
import { List } from "../domain/list";

export class ListController {
    constructor(
        private createListUseCase: CreateListUseCase,
        private deleteListUseCase: DeleteListUseCase,
        private updateListUseCase: UpdateListUseCase
    ) {}

    async save(req: Request, res: Response): Promise<void> {
        try {
            if(req.body){
                const listData: List = req.body;
                const list = this.createListUseCase.execute(listData);
                res.status(201).json({message: "List succesfully created!"})
            }
        } catch(error){
            res.status(500).json({message: `Error: ${error}`})
        }
    }
    
    getTasks(req: Request, res: Response) {}
    update(req: Request, res: Response) {}
    delete(req: Request, res: Response) {}
}