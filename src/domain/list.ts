import { ToDo } from "./todo"

export interface List{
    id: string,
    name: string,
    to_dos?: ToDo[]
}