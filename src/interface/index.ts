const express = require('express');

const app = express()

app.use(express.json())

app.post("/list", (req: Request, res: Response) => { })
app.post("/todo", (req: Request, res: Response) => { })
app.post("/user", (req: Request, res: Response) => { })

app.get("/list/:list_id", (req: Request, res: Response) => { })
app.get("/todo/:todo_id", (req: Request, res: Response) => { })
app.get("/todo/user/:user_id", (req: Request, res: Response) => { })
app.get("/todo/forToday", (req: Request, res: Response) => { })
app.get("/todo/forToday/:user_id", (req: Request, res: Response) => { })

app.patch("/todo", (req: Request, res: Response) => { })
app.patch("/list", (req: Request, res: Response) => { })
app.patch("/user", (req: Request, res: Response) => { })

app.delete("/todo", (req: Request, res: Response) => { })
app.delete("/list", (req: Request, res: Response) => { })
app.delete("/user", (req: Request, res: Response) => { })


if (require.main === module) {
    const PORT = 3333;
    app.listen(PORT, () => console.log(`Aplicação rodando em https://localhost:${PORT}`))
}