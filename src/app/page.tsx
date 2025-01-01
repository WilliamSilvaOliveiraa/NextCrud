"use client";

import { useEffect } from "react";
import ProdutoList from "@/functions/RenderProducts";
import ProductForm from "@/functions/ProductForm";
import useProdutos from "@/hooks/useProduct";

export default function Home() {
  const {
    produto,
    produtos,
    setProduto,
    obterProdutos,
    criarProduto,
    alterarProduto,
    obterProdutoPorId,
    excluirProduto,
  } = useProdutos();

  useEffect(() => {
    obterProdutos();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen gap-12">
      <ProductForm
        produto={produto}
        setProduto={setProduto}
        criarProduto={criarProduto}
        alterarProduto={alterarProduto}
      />
      <ProdutoList
        produtos={produtos}
        obterProdutoPorId={obterProdutoPorId}
        excluirProduto={excluirProduto}
      />
    </div>
  );
}
