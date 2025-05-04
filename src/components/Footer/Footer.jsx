import { logoBg } from "../../data/data";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
} from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {logoBg.map((logo, index) => (
        <img
          key={index}
          src={logo.img}
          alt="logo marca eSneakers"
          className="footer_logo"
        />
      ))}
      <address className="address" aria-label="Endereço e telefone da loja">
        <span>
          <FaLocationDot aria-hidden="true" /> Rua das Flores, 123, Centro
        </span>
        <a href="tel:+5599912345678" className="telephone">
          <BsFillTelephoneFill aria-hidden="true" /> +55 (99) 91234-5678
        </a>
      </address>
      <div className="footer_socials">
        <FaFacebookF aria-label="Facebook" />
        <FaXTwitter aria-label="X / Twitter" />
        <FaInstagram aria-label="Instagram" />
      </div>
    </footer>
  );
}

export default Footer;
