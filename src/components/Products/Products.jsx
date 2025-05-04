import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { produtos } from "../../data/data";
import "./products.css";
import { FaCartPlus } from "react-icons/fa";
import RatingStars from "../RatingStars/RatingStars";

function Products() {
  const { adicionarCarrinho } = useContext(CartContext);

  return (
    <section id="produtos" className="products">
      <h2>Produtos</h2>
      <div className="product_cards">
        {produtos.map((produto) => (
          <div className="product_card">
            <img src={produto.img} alt="" />
            <div className="product_info">
              <h4 className="info_title">{produto.nome}</h4>
              <p className="info_tag">{produto.descricao}</p>
              <p className="info_price">
                {produto.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <RatingStars rating={produto.rating} />
              <button
                className="info_button"
                onClick={() => adicionarCarrinho(produto)}
              >
                <FaCartPlus />
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
