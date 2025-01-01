"use client";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState<any>([]);
  const [produto, setProduto] = useState<any>({});

  function renderizarFormProdutos() {
    return (
      <form className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Nome"
          value={produto.nome}
          onChange={(e) => ({ ...produto, nome: e.target.value })}
          className="bg-zinc-700 p-2 rounded"
        />
        <input type="text" placeholder="Preço" />
        <button>Adicionar</button>
      </form>
    );
  }

  function renderizarProdutos() {
    return (
      <div className="flex flex-col gap-2">
        {produtos.map((produto) => (
          <div key={produto.id} className="flex gap-2 bg-zinc-800 p-2 rounded">
            <h1>{produto.nome}</h1>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>
    );
  }
  async function obterProdutos() {
    const resposta = await fetch("http://localhost:3001/produtos");
    const produtos = await resposta.json();
    setProdutos(produtos);
  }

  useEffect(() => {
    obterProdutos();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      {renderizarFormProdutos()}
      {renderizarProdutos()}
    </div>
  );
}
