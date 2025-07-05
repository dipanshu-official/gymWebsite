import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Programs from '../components/sections/Programs'
import Membership from '../components/sections/Membership'
import Trainers from '../components/sections/Trainers'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'
import Footer from '../components/layout/Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Membership />
        <Trainers />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default HomePage