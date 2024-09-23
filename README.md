# To Do List usando Clean Architecture e TDD

Nesse projeto da Semana 6 do Curso Aprofunda PretaLab, o objetivo será a a criação de uma API de simulação de uma Lista de Tarefas estilo Kanban. Utilizando os conceitos vistos em aula de Clean Architecure, princípios SOLID, Typescript e TDD, a estrutura do projeto seguirá da seguinte forma: Na API ToDoList as tarefas fazem parte de uma lista de tarefas e iniciam fazendo parte da lista Default. 

Enquanto a tarefa fizer parte dessa lista, ela pode continuar sem ser atribuída a um usuário já que se entende que ela pode não ter sido pega por ninguém para concluir, mas ao tentar realocá-la para qualquer lista diferente da Default ela obrigatoriamente precisará de um usuário para manter um registro de quem está encaminhando ela.

Como uma forma de ajudar a equipe, a API pode fornecer quais tarefas estão marcadas para conclusão no mesmo dia da consulta e também pode fornecer individualmente esse relatório das tarefas do dia.

## 2. Entidades do Projeto

Para isso, as entidades criadas inicialmente serão:

### 2.1 Tarefa
id: string,
user_id?: string,
list_id: string,
created_at: string,
deadline: string,
title: string,
description: string,
tags?: string[]

### 2.2 Lista
id: string,
name: string,
to_dos: ToDo[]

### 2.3 Usuário
id: string,
name: string,
to_dos: ToDo[]


## 3. Expectativas da API (tomara que dê certo)

Seguindo a proposta CRUD (Create, Read, Update e Delete), o usuário da API deve ser capaz de:


- Criar uma lista de tarefas (estados)
- Criar uma tarefa
- Criar novo usuário

- Ver as tarefas de determinada lista
- Ver as tarefas com a data de conclusão para hoje (equipe)
- Ver todas as tarefas atribuídas a um usuário
- Ver as tarefas com a data de conclusão para hoje (usuário específico)
- Ver uma tarefa específica com mais detalhes

- Atualizar um estado de tarefa (mudá-la de lista). Verifica se existe um usuário atribuído.
- Atualizar usuário responsável pela tarefa.
- Atualizar a descrição/título/tags/deadline de uma tarefa

- Deletar uma tarefa
- Deletar uma lista (e todas as tarefas a ela atribuídas voltam para a lista Default)

## 3. Estrutura de Pastas

Usando Clean Architecture, a estrutura de pastas do projeto seguirá esse formato:

src/
│
├── application/
│   ├── repositories/
│   │   ├── todo-repository.ts // Interface do repositório
│   │   ├── user-repository.ts
│   │   ├── list-repository.ts
│   │   └── id-generator-interface.ts // Interface do gerador de id
│   │
│   └── use-cases/
│       ├── create-todo-use-case.ts
│       ├── create-list-use-case.ts
│       ├── create-user-use-case.ts
│       ├── get-todo-use-case.ts
│       ├── get-today-todos-use-case.ts
│       ├── get-today-user-todos-use-case.ts
│       ├── get-all-todos-use-case.ts
│       ├── get-all-user-todos-use-case.ts
│       ├── update-todo-use-case.ts
│       ├── update-todo-list-use-case.ts
│       ├── update-todo-user-use-case.ts
│       ├── delete-todo-use-case.ts
│       └── delete-list-use-case.ts 
│     
├── domain/
│   ├── todo.ts                // Interface do domínio ToDo
│   ├── todo-list.ts           // Interface do domínio ToDoList
│   └── user.ts                // Interface do domínio User
│
├── infrastructure/
│   ├── database/
│   │   └── repository.ts      // Implementação do repositório
│   │
│   └── utils/
│       ├── config.ts          // Configuração de dependências
│       └── id-generator.ts   //  implementação da interface de gerar ID
│
└── interface/
    ├── book-controller.ts     // Controlador que lida com as requisições HTTP
    └── index.ts              // Arquivo principal da aplicação



## 4. Testagem de Endpoints do Insomnia
