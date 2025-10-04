import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import Foods from "../components/Foods"
import Category from "../components/Category"


const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Cards />
      <Foods />
      <Category />
     
    </div>  
  )
}

export default Homepage
