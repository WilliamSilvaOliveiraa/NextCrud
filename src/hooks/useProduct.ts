"use client";

import { useState } from "react";

export default function useProdutos() {
  const [produto, setProduto] = useState<any>({});
  const [produtos, setProdutos] = useState<any>([]);

  async function obterProdutos() {
    const resp = await fetch("http://localhost:3001/produtos");
    const produtos = await resp.json();
    setProdutos(produtos);
  }

  async function criarProduto() {
    await fetch("http://localhost:3001/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });
    setProduto({});
    await obterProdutos();
  }

  async function alterarProduto() {
    await fetch(`http://localhost:3001/produtos/${produto.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });
    setProduto({});
    await obterProdutos();
  }

  async function obterProdutoPorId(id: number) {
    const resp = await fetch(`http://localhost:3001/produtos/${id}`);
    const produto = await resp.json();
    setProduto(produto);
  }

  async function excluirProduto(id: number) {
    await fetch(`http://localhost:3001/produtos/${id}`, {
      method: "DELETE",
    });
    await obterProdutos();
  }

  return {
    produto,
    produtos,
    setProduto,
    obterProdutos,
    criarProduto,
    alterarProduto,
    obterProdutoPorId,
    excluirProduto,
  };
}
