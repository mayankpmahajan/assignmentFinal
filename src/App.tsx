import Navbar from "./customComponents/Navbar"
import Hero from "./customComponents/Hero"
import Info from "./customComponents/Info"
import Footer from "./customComponents/Footer"

function App() {

  return (
    <main className="bg-brandSecondary">
      <Navbar/>
      <Hero/>
      <Info/>
      <Footer/>
    </main>
  )
}

export default App
