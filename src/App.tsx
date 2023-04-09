import './App.css'
import AboutMe from './components/AboutMe'
import Albums from './components/Albums'
import Footer from './components/Footer'
import Hero from './components/Hero'
import InstagramFeed from './components/InstagramFeed'

function App() {

  return (
    <div className="App">
      <Hero />
      <Albums />
      <AboutMe />
      <InstagramFeed />
      <Footer />
    </div>
  )
}

export default App
