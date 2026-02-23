export type Produtos = {
  id?: number;
  title?: string;
  image?: string;
  description?: string;
  price?: number;
  published?: boolean ;
}

export type IndividualProdutos = {
  id?: number;
  title?: string;
  image?: string;
  description?: string;
  price?: number;
  published?: boolean ;
} | null;