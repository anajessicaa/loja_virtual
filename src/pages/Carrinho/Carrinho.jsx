import { useContext } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { produtos } from "../../data/data";
import "./carrinho.css";

function Carrinho() {
  const { carrinho, removerProduto, alterarQuantidade, limparCarrinho } =
    useContext(CartContext);

  const subtotal = carrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  if (carrinho.length === 0) {
    return (
      <section className="carrinho carrinho-vazio-wrapper">
        <div className="carrinho-vazio">
          <p>Seu carrinho está vazio</p>
          <div className="comprar-carrinho-vazio">
            <Link to="/">
              <AiOutlineArrowLeft className="icon" size={20} />
              <span>Comece a comprar</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="carrinho">
      <div>
        <div className="lista-titulo">
          <ul>
            <li className="titulo-produto">Produto</li>
            <li className="preco-produto">Preço</li>
            <li className="quantidade">Quantidade</li>
            <li className="total">Total</li>
          </ul>
        </div>
      </div>

      {carrinho.map((produto) => (
        <div className="itens-carrinho" key={produto.id}>
          <div className="itens">
            <div className="produto-carrinho">
              <img src={produto.img} alt="" />
              <div className="detalhes-carrinho">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <button
                  className="remover-produto"
                  onClick={() => removerProduto(produto.id)}
                >
                  Remover produto
                </button>
              </div>
            </div>
            <div className="carrinho-produto-preco">
              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
            <div className="carrinho-produto-qtd">
              <button
                className="diminuir"
                onClick={() => alterarQuantidade(produto.id, "diminuir")}
              >
                -
              </button>
              <div className="count">{produto.quantidade}</div>
              <button
                className="aumentar"
                onClick={() => alterarQuantidade(produto.id, "aumentar")}
              >
                +
              </button>
            </div>
            <div className="carrinho-produto-total">
              {(produto.preco * produto.quantidade).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </div>
        </div>
      ))}

      <div className="carrinho-sumario">
        <button className="limpar-carrinho" onClick={limparCarrinho}>
          Limpar Carrinho
        </button>
        <div className="carrinho-finalizar-compra">
          <div className="subtotal">
            <p>SubTotal:</p>
            <span className="preco-subtotal">
              {subtotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button className="btn-finalizar-compra">Finalizar compra</button>
          <div className="comprar">
            <Link to="/">
              <AiOutlineArrowLeft className="icon" size={20} />
              <span className="continue-comprando">Continue comprando</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrinho;
