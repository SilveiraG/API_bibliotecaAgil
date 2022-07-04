const express = require('express');
const routes = express.Router();

    let livros = [{
        numero: 1,
        titulo: "Como fazer sentido bater o martelo",
        autor:  "Alexandro Aolchique",
        ano: "2017",
        status: "Disponivel",
        emprestadoPara: ""
    }, 
    {
        numero: 2,
        titulo: "Sejamos todos feministas",
        autor: "Chimamanda Ngozi Adichie",
        ano: "2015",
        status: "Disponivel",
        esprestadoPara: ""
    },
    {
        numero: 3,
        titulo: "Basquete 101",
        autor: "Hortência Marcari",
        ano: "2010",
        status: "Disponivel",
        emprestadoPara: ""
    }
]

routes.get('/listar', (req,res) => {
    const {id} = req.body;
    const retorno = livros.find(livro=>livro.numero === id);
    if (!retorno)return res.status(404).send('Livro não encontrado');
    return res.status(200).send(retorno)
});

routes.post('/retirar', (req,res) => {
    const {id} = req.body;
    const retorno = livros.find(livro=>livro.numero === id);
    if (retorno && retorno.status.toUpperCase() === "DISPONIVEL") {
        
        retorno.status = "Indisponivel";
        return res.status(200).send(retorno);

    }
    if (!retorno) return res.status(404).send("Livro não existe");
    return res.status(404).send("Livro indisponivel");
});

routes.post('/devolver', (req,res) => {
    const {id} = req.body;
    const retorno = livros.find(livro=>livro.numero === id);
    if (retorno && retorno.status.toUpperCase() === "INDISPONIVEL") {
        
        retorno.status = "Disponivel";
        return res.status(200).send(`Livro "${retorno.titulo}" Entregue com sucesso`);

    }
    if (!retorno) return res.status(404).send("Livro não existe");
    return res.status(404).send("Não foi possivel devolver o livro pois o mesmo já está disponivel");
});

routes.post('/doar', (req,res) => {
    const {titulo , autor , ano} = req.body;
    const id = livros.length + 1;
    const livrosId = livros.find(livro=>livro.numero === id);
    if (!livrosId) {
        const newLivro = {numero: id, titulo: titulo, autor: autor, ano: ano, status: "Disponivel", emprestadoPara: ''};
        livros.push(newLivro);
        console.log(livros);
        return res.status(200).send("Livro adicionado com sucesso");
    };

    return res.status(404).send("ID já cadastrado");
    
    
})



module.exports = routes;