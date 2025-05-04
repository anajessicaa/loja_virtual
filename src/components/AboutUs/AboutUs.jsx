import { logo } from "../../data/data";
import "./aboutUs.css";

function AboutUs() {
  return (
    <section id="quem-somos" className="about-container">
      <h1 className="about-title">Quem Somos</h1>
      <div className="about-content">
      {logo.map((logo, index) => (
        <div key={index} className="about-image">
          <img src={logo.img} alt="logo marca eSneakers" />
        </div>
      ))}
        
        <div className="about-text">
          <p>
            A eSneakers tem mais de uma década de experiência no mercado e busca
            constantemente oferecer produtos com qualidade excepcional, design
            inovador e, principalmente, conforto para os pés.
          </p>
          <p>
            Além disso, proporciona uma excelente experiência de compra para
            nossos clientes, desde o processo de escolha até a entrega final.
            Nosso objetivo é garantir que nossos clientes tenham uma experiência
            de compra sem problemas e satisfatória, e estamos sempre prontos para
            ajudá-los com qualquer dúvida ou problema que possa surgir.
          </p>
          <p>
            Agradecemos por visitar nosso site e esperamos que você encontre o
            tênis perfeito para você. Se tiver alguma dúvida ou precisar de ajuda,
            não hesite em entrar em contato com nossa equipe de atendimento ao
            cliente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
