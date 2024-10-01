import { Request, Response } from 'express';
import { connectDB } from "../infraestructure/database/mongo-db/connection";
import { configureDependencies } from "../infraestructure/utils/config";

const express = require('express');

const app = express()
connectDB();

const {listController, todoController, userController} = configureDependencies()

app.use(express.json())

app.post("/list", (req: Request, res: Response) => listController.save(req, res))
app.post("/todo", (req: Request, res: Response) => todoController.save(req, res))
app.post("/user", (req: Request, res: Response) => userController.save(req, res))

app.get("/list/:list_id", (req: Request, res: Response) => listController.getTasks(req, res))
app.get("/todo/:todo_id", (req: Request, res: Response) => todoController.getOne(req, res))
app.get("/todo/user/:user_id", (req: Request, res: Response) => userController.getTasks(req, res))
app.get("/todo/forToday", (req: Request, res: Response) => todoController.getTasksForToday(req, res))
app.get("/todo/forToday/:user_id", (req: Request, res: Response) => userController.getTasksForToday(req, res))

app.patch("/todo", (req: Request, res: Response) => todoController.update(req, res))
app.patch("/list", (req: Request, res: Response) => listController.update(req, res))
app.patch("/user", (req: Request, res: Response) => userController.update(req, res))

app.delete("/todo", (req: Request, res: Response) => todoController.delete(req, res))
app.delete("/list", (req: Request, res: Response) => listController.delete(req, res))
app.delete("/user", (req: Request, res: Response) => userController.delete(req, res))


if (require.main === module) {
    const PORT = 3333;
    app.listen(PORT, () => console.log(`Aplicação rodando em https://localhost:${PORT}`))
}