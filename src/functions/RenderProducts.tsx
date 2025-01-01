import React from "react";

interface Produto {
  id: string;
  nome: string;
  preco: string;
}

export interface ProdutoListProps {
  produtos: any[];
  obterProdutoPorId: (id: number) => void;
  excluirProduto: (id: number) => void;
}

const ProdutoList: React.FC<ProdutoListProps> = ({
  produtos,
  obterProdutoPorId,
  excluirProduto,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {produtos.map((produto) => (
        <div
          key={produto.id}
          className="flex flex-col gap-2 bg-zinc-800 px-4 py-2 rounded-md w-[540px]"
        >
          <div className="flex gap-2 items-start">
            <div className="flex-1">{produto.nome}</div>
            <div>{produto.preco}</div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => obterProdutoPorId(produto.id)}
              className="bg-green-500 p-2 rounded-md"
            >
              Alterar
            </button>
            <button
              onClick={() => excluirProduto(produto.id)}
              className="bg-red-500 p-2 rounded-md"
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProdutoList;
