import imageMap from '../utils/imgMap';


const rawProdutos = [
  { id: 1,
    nome: "Tênis Nike Downshifter 12",
    rating: 4.5,
    descricao: "Tênis Nike Feminino",
    preco: 299.90,
    img: "produtos/tenis-nike-downshifter-12-feminino-img_ribodx.jpg",
  },
  { id: 2,
    nome: "Tênis Puma Carina Bold BDP",
    rating: 4.8,
    descricao: "Tênis Puma Feminino",
    preco: 250.00,
    img: "produtos/tenis-puma-carina-bold-bdp-feminino-img_poouvh.jpg",
  },
  { id: 3,
    nome: "Tênis Adidas vs Pace 2.0",
    rating: 4.6,
    descricao: "Tênis Adidas Masculino",
    preco: 219.90,
    img: "produtos/tenis-adidas-vs-pace-2-0-masculino-img_wiwuse.jpg",
  },
  { id: 4,
    nome: "Tênis Asics Gel Kamo Go",
    rating: 4.7,
    descricao: "Tênis Asics Masculino",
    preco: 490.00,
    img: "produtos/tenis-asics-gel-kamo-go-masculino-img_um0sjz.jpg",
  },
  { id: 5,
    nome: "Tênis Vans MN Ward Canvas",
    rating: 4.5,
    descricao: "Tênis Vans Masculino",
    preco: 259.90,
    img: "produtos/tenis-vans-mn-ward-canvas-masculino-img_hzrdbx.jpg",
  },
  { id: 6,
    nome: "Tênis Converse CT All Star MS",
    rating: 4.6,
    descricao: "Tênis Converse Unissex",
    preco: 380.00,
    img: "produtos/tenis-converse-ct-all-star-ms-adulto-img_zg1ort.jpg",
  },
];

const rawCarousel = [
  {
    img: "carousel/adidas-NMD-1.jpg",
    titulo: "Adidas NMD1",
    texto: "Supere seus limites com os tênis esportivos de alta performance",
  },
  {
    img: "carousel/marcas.jpg",
    titulo: "Estilo e qualidade em cada detalhe. Nossas marcas de sucesso são a escolha perfeita.",
  },
  {
    img: "carousel/NSW-Air-Jord.-1-Retro-High-Flyknit-Fnx.jpg",
    titulo: "NSW Air Jord.1 Retro High Flyknit Fnx",
    texto: "Pise forte no seu esporte favorito com os tênis de última geração.",
  },
  {
    img: "carousel/Tênis New-Balance-237.jpg",
    titulo: "New Balance 237",
    texto: "Conforto e estilo em um só lugar",
  },
];

const rawLogo = [
  {
    img: "logo/logo-esneakers.png",
  },
];

const rawLogoBg = [
  {
      img: "logo/logo-esneakers2-removebg-preview.png",
  },
];

const rawEquipe = [
  {
    img: "equipe/Bruno-Oliveira.png",
    nome: "Bruno Oliveira",
    profissao: "Designer Gráfico"
  },
  {
    img: "equipe/Camila-Santos.png",
    nome: "Camila Santos",
    profissao: "Analista de Mídias Sociais"
  },
  {
    img: "equipe/Diego-Ferreira.png",
    nome: "Diego Ferreira",
    profissao: "Web Designer"
  },
  {
    img: "equipe/Isabela-Cardoso.png",
    nome: "Isabela Cardoso",
    profissao: "Especialista em SEO"
  },
];

const menu = [
  { href: "/", text: "Início" },
  { href: "#quem-somos", text: "Quem Somos" },
  { href: "#nosso-time", text: "Nosso Time" },
  { href: "#produtos", text: "Produtos" },
];

const mapImages = (arr) =>
  arr.map((item) => ({
    ...item,
    img: imageMap[item.img],
  }));

export const produtos = mapImages(rawProdutos);
export const carousel = mapImages(rawCarousel);
export const logo = mapImages(rawLogo);
export const logoBg  = mapImages(rawLogoBg);
export const equipe = mapImages(rawEquipe);
export default menu;