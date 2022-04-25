import { Categoria } from "./Categoria";

export class Produto {
    public id: number;
    public nome: string;
    public detalhe: string;
    public linkFoto: string;
    public preco: number;
    public precoPromo: number;
    public disponivel: number;
    public destaque: number;
    public prontaEntrega: number;
    public categoria: Categoria

    public constructor(){
        this.categoria = new Categoria();
        this.categoria.id = 0;
    }
}