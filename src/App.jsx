import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home.jsx";
import Carrinho from "./pages/Carrinho/Carrinho.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="page-wrapper">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
