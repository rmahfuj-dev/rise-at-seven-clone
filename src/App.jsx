import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='min-h-[200vh] '>
      <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App