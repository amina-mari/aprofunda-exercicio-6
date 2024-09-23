import { ToDo } from "./todo"

export interface User {
    id: string,
    name: string,
    to_dos?: ToDo[]
}