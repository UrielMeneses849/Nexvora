import styles from './App.module.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LandingSections from './components/LandingSections'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

function App() {
  return (
    <div className={styles.app}>
      <Cursor />
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <LandingSections />
      </main>
      <Footer />
    </div>
  )
}

export default App
