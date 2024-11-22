import express from "express";
import multer from "multer";
import {listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsControllers.js";

//Essa parte é para instalar o multer no sistema windows
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({storage: storage}) //Se for linux ou mac só essa linha sem storage

const routes = (app) => {    
    app.use(express.json()); //Permite que o servidor interprete requisições com o corpo no
    app.get("/posts", listarPosts); //Rota para buscas todos os posts
    app.post("/posts", postarNovoPost); //Rota para criar um post
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", atualizarNovoPost);
}

export default routes;