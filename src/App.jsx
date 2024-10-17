import Navigation from "./components/Navigation/Navigation.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import Industry from "./components/Industry/Industry.jsx"
import Managelinks from "./components/ManageLinks/Managelinks.jsx"
import Effortless from "./components/Effortless/Effortless.jsx"
import Pricing from "./components/Pricing/Pricing.jsx"
import Testimonials from "./components/Testimonials/Testimonials.jsx"
import LastSection from "./components/LastSection/LastSection.jsx"
import Footer from "./components/Footer/Footer.jsx"

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Dashboard />
      <Industry />
      <Managelinks />
      <Effortless />
      <Pricing />
      <Testimonials />
      <LastSection />
      <Footer />
    </div>
  )
}

export default App
