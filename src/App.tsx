import './App.css'
import Header from './components/Header'
import Rot13Converter from './components/Rot13Converter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Rot13Converter />
      <Footer />
    </div>
  )
}

export default App
