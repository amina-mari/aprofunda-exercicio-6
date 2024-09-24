export interface ToDo {
    id: string,
    user_id?: string,
    list_id: string,
    created_at: string,
    deadline: string,
    title: string,
    description: string,
    tags?: string[]
}