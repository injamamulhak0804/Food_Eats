import Category from "./Components/Category"
import Food from "./Components/Food"
import Footer from "./Components/Footer"
import HeadCard from "./Components/HeadCard"
import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar"

function App() {
  return (
    <>
      <h1>
        <NavBar />
        <Hero />
        <HeadCard />
        <Food />
        <Category />
        <Footer/>
      </h1>
    </>
  )
}

export default App
