import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"; //Não esquecer o .js nesse caso
const conxao = await conectarAoBanco(process.env.STRING_CONEXAO); //Conecta ao banco utilizando strings

export async function getTodosPosts() { //Função para buscar todos os posts no B.D
    const db = conxao.db("alura-dev-back-end"); //Seleciona o banco de dados
    const colecao = db.collection("posts"); //Seleciona a coleção "posts"
    return colecao.find().toArray(); //Retorna um array com todos os documentos da coleção
}

export async function criarPost(novoPost) {
    const db = conxao.db("alura-dev-back-end"); 
    const colecao = db.collection("posts"); 
    return colecao.insertOne(novoPost); 
}

export async function atualizarPost(id, novoPost) {
    const db = conxao.db("alura-dev-back-end"); 
    const colecao = db.collection("posts"); 
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novoPost}); 
}