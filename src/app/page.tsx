"use client";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState<any>([]);
  const [produto, setProduto] = useState<any>({});

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

  async function obterProdutos() {
    const resposta = await fetch("http://localhost:3001/produtos");
    const produtos = await resposta.json();
    setProdutos(produtos);
  }

  function renderizarFormProdutos() {
    return (
      <form className="flex gap-5">
        <div className="flex flex-col ">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Nome"
            value={produto.nome}
            onChange={(e) => ({ ...produto, nome: e.target.value })}
            className="bg-zinc-700 p-2 rounded"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="descricao">Descrição</label>
          <input
            id="descricao"
            type="text"
            placeholder="Descrição"
            value={produto.descricao}
            onChange={(e) => ({ ...produto, descricao: e.target.value })}
            className="bg-zinc-700 p-2 rounded"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="preco">Preço</label>
          <input
            id="preco"
            type="number"
            placeholder="Preço"
            value={produto.preco}
            onChange={(e) => ({ ...produto, preco: e.target.value })}
            className="bg-zinc-700 p-2 rounded"
          />
        </div>
        <div>
          <button
            className="bg-blue-500 p-2 rounded-md"
            onClick={() => {
              criarProduto();
            }}
          >
            Criar Produto
          </button>
        </div>
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
