import {getTodosPosts, criarPost} from "../models/postsModels.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts(); //Chama a função
    res.status(200).json(posts); //Envia resposta http com status 200(OK)
}
 
export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}