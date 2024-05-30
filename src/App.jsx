import './App.css'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsProvider } from './context/ProductsContext'
import { UsersProvider } from './context/UsersContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartsContext'

function App() {

  return (
    <>
      <UsersProvider>
        <ProductsProvider>
            <CartProvider>
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
                <div className='space'></div>
                <Footer />
              </BrowserRouter>
            </CartProvider>
        </ProductsProvider>
      </UsersProvider>

    </>
  )
}

export default App
