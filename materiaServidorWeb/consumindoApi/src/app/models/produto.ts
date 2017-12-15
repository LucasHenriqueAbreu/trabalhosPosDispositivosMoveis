import { Categoria } from './categoria';
export class Produto {
    id:string;
    nome:string;
    categoria:Categoria = new Categoria();
}
