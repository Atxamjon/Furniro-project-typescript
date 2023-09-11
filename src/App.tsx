import './sass/global.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout.tsx"
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Like from './pages/Like'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/shop' element={<Shop />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/contact' element={<Like />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App