import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js"; //Não esquecer o .js nesse caso
const conxao = await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
    {id: 1, descricao: "Uma foto", imgUrl: "https://placecats.com/millie/300/150"},
    {id: 2, descricao: "Vídeo divertido de um gato", imgUrl: "https://placecats.com/millie/300/150"},
    {id: 3, descricao: "Meme engraçado", imgUrl: "https://placecats.com/millie/300/150"},
    {id: 4, descricao: "Paisagem deslumbrante", imgUrl: "https://placecats.com/millie/300/150"},
    {id: 5, descricao: "Citação inspiradora", imgUrl: "https://placecats.com/millie/300/150"},
    {id: 6, descricao: "Receita deliciosa", imgUrl: "https://placecats.com/millie/300/150"},
];

const app = express();
app.use(express.json());

app.listen(3000, () =>{
    console.log("Servidor escutando...");
});

async function getTodosPosts() {
    const db = conxao.db("alura-dev-back-end");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

app.get("/posts", async(req, res) => {
    const posts = await getTodosPosts()
    res.status(200).json(posts);
});