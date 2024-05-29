import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsProvider } from './context/ProductsContext'
import { UsersProvider } from './context/UsersContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { CartProvider } from './context/CartsContext'

function App() {

  return (
    <>
      <CartProvider>
        <UsersProvider>
          <ProductsProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </ProductsProvider>
        </UsersProvider>
      </CartProvider>
    </>
  )
}

export default App
