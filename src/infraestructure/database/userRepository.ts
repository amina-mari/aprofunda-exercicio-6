import { UserRepository } from "../../application/repositories/user-repository";
import { ToDo } from "../../domain/todo";
import { User } from "../../domain/user";

export class UserClassRepository implements UserRepository  {
    save(user: User): void {
        throw new Error("Method not implemented.");
    }
    getUserTodayTodos(user_id: string): ToDo[] | null {
        throw new Error("Method not implemented.");
    }
    getUserTodos(user_id: string): ToDo[] | null {
        throw new Error("Method not implemented.");
    }
    update(user_id: string): User | null {
        throw new Error("Method not implemented.");
    }
    delete(user_id: string): boolean {
        throw new Error("Method not implemented.");
    }

}