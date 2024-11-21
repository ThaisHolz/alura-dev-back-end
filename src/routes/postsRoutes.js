import express from "express";
import {listarPosts, postarNovoPost} from "../controllers/postsControllers.js";

const routes = (app) => {    
    app.use(express.json()); //Permite que o servidor interprete requisições com o corpo no
    app.get("/posts", listarPosts); //Rota para buscas todos os posts
    app.post("/posts", postarNovoPost); //Rota para criar um post
}

export default routes;