import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import '@fortawesome/fontawesome-free/css/all.css';

import App from './App.jsx';
import StaplesC from "./components/StaplesCard/StaplesC.jsx";
import './index.css';
import About from './views/About/About.jsx';
import Blog from './views/Blog/Blog.jsx';
import OilsC from './components/OilsCard/OilsC.jsx';
import DryFruitsc from './components/DryFruits/DryFruitsc.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/login/Login.jsx';
import Signup from './components/login/Signup.jsx';
import CartPage from './components/CartPage/CartPage.jsx';
import CheckoutPage from './components/CheckoutPage/CheckoutPage.jsx';
import Products from './views/Product/Products.jsx';
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/staplesc" element={<StaplesC/>}/>
    <Route path="/oilsc" element={<OilsC/>}/>
    <Route path="/dryfruits" element={<DryFruitsc/>}/>
    <Route path="/footer" element={<Footer/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/checkout" element={<CheckoutPage/>}/>
    <Route path="/cart" element={<CartPage />} /> {/* Cart page */}
  </Routes>
  </BrowserRouter>
)
