import Categoria from "./Categoria";

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  entrega: number;
  categoria: Categoria;
  imagemUrl: string; 
}
