import { Categoria } from "./Categoria";

export class Produto {
    public id!: number;
    public nome!: string;
    public detalhe!: string;
    public linkFoto!: string;
    public preco!: number;
    //public precoPromo!: number;
    public disponivel!: number;
    public categoria!: Categoria
}