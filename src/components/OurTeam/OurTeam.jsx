import { equipe } from "../../data/data";
import "./ourTeam.css";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

function OurTeam() {
  return (
    <section id="nosso-time" className="team_container">
  <h2>Nosso Time</h2>
  <div className="team_content">
    {equipe.map((membro, index) => (
      <div className="card" key={index}>
        <img src={membro.img} alt={`Foto de ${membro.nome}`} />
        <h3>{membro.nome}</h3>
        <p>{membro.profissao}</p>
        <div className="socials">
          <FaFacebookF aria-label="Facebook" />
          <FaXTwitter aria-label="X / Twitter" />
          <FaInstagram aria-label="Instagram" />
          <FaLinkedinIn aria-label="LinkedIn" />
        </div>
      </div>
    ))}
  </div>
</section>
);
}

export default OurTeam;
