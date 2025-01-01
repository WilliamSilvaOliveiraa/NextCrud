import React from "react";

interface ProductFormProps {
  produto: any;
  setProduto: (produto: any) => void;
  criarProduto: () => void;
  alterarProduto: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  produto,
  setProduto,
  criarProduto,
  alterarProduto,
}) => {
  return (
    <div className="flex flex-col gap-5 items-end">
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={produto.nome ?? ""}
            onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
            className="bg-zinc-700 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="preco">Preço</label>
          <input
            id="preco"
            type="number"
            value={produto.preco ?? ""}
            onChange={(e) => setProduto({ ...produto, preco: +e.target.value })}
            className="bg-zinc-700 p-2 rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          type="text"
          value={produto.descricao ?? ""}
          onChange={(e) =>
            setProduto({ ...produto, descricao: e.target.value })
          }
          className="bg-zinc-700 p-2 rounded-md"
        />
      </div>

      <div className="relative w-full">
        {produto.id ? (
          <button
            onClick={alterarProduto}
            className="bg-blue-900 px-4 py-2 rounded-md w-full"
          >
            Alterar Produto
          </button>
        ) : (
          <button
            onClick={criarProduto}
            className="bg-blue-500 px-4 py-2 rounded-md w-full"
          >
            Criar Produto
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductForm;
