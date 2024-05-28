import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'
import Cart from './components/Cart/Cart'
import User from './components/User/User'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsProvider } from './context/ProductsContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { UsersProvider } from './context/UsersContext'

function App() {

  return (
    <>
      <UsersProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<User />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductsProvider>
      </UsersProvider>
    </>
  )
}

export default App
