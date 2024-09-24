import { ToDo } from "../../domain/todo";
import { User } from "../../domain/user";

export interface UserRepository {

    save(user: User): void
    getUserTodayTodos(user_id: string): Array<ToDo> | null
    getUserTodos(user_id: string): Array<ToDo> | null
    update(user_id: string): User | null
    delete(user_id: string): boolean
}