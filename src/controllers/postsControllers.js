import { getTodosPosts } from "../models/postsModels.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts(); //Chama a função
    res.status(200).json(posts); //Envia resposta http com status 200
}; 