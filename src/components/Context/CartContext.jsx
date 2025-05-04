import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarCarrinho = (produto) => {
    setCarrinho((prev) => {
      const itemExistente = prev.find((item) => item.id === produto.id);
      if (itemExistente) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prev, { ...produto, quantidade: 1 }];
      }
    });
  };

  const removerProduto = (id) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== id));
  };

  const alterarQuantidade = (id, operacao) => {
    setCarrinho((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade:
                operacao === "aumentar"
                  ? item.quantidade + 1
                  : Math.max(1, item.quantidade - 1),
            }
          : item
      )
    );
  };

  const limparCarrinho = () => setCarrinho([]);
  return (
    <CartContext.Provider
      value={{
        carrinho,
        adicionarCarrinho,
        removerProduto,
        alterarQuantidade,
        limparCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
