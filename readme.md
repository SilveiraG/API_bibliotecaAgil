# Desafio Aceleradora Agil

## instalação

Para instalar as dependencias execute o comando

`npm instal`

## Subir servidor

Para suber o servidor ultilize o comando
`npm start`

## requisições

Para ver um livro especifico

`GET` http://localhost:3001/listar
+ Body {"id" : 1}

`POST` http://localhost:3001/retirar
+ Body {"id" : 1}

`POST` http://localhost:3001/devolver
+ Body {"id" : 1}

`POST` http://localhost:3001/doar
+ Body {"titulo" : "Novo Livro", "autor" : "Inês", "ano" : "2000"}