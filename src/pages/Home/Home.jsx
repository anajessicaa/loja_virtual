import AboutUs from "../../components/AboutUs/AboutUs.jsx"
import Carousel from "../../components/Carousel/Carousel"
import OurTeam from "../../components/OurTeam/OurTeam.jsx"
import Products from "../../components/Products/Products.jsx"

function Home() {
  return (
    <>
      <Carousel />
      <main className="main">
        <AboutUs />
        <OurTeam />
        <Products />
      </main>
    </>
  )
}

export default Home