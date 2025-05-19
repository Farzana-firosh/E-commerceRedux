import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/login'
import SignUp from './Components/SignUp/Signup';

import Header from './Components/Header/Header'

import Bannerr from './Components/Banner/Bannerr'
import Home from './Components/Home/Home';
import {Routes,Route} from 'react-router-dom'
import ProductList from './Components/ProductList/ProductList';
import AboutUs from './Components/About/About';
import ContactUs from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import { useState } from 'react';
import { createContext } from 'react';
import Cart from './Components/Context/Cart';
import Feedback from './Components/Pages/Feedback';
import NotFound from './Components/Pages/NotFound'
function App() {

const [searchText, setSearchText] = useState ('')
function onSearchChange(text) {
  setSearchText(text)
}

  return (
    <div className="App">
      
      <Header callBackofheader= {onSearchChange} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<ContactUs/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Products' element={<ProductList searchText={searchText}/>}/>
        <Route path='/Products/:productId'element={<ProductDetail/>}/>
        <Route path='/About' element={<AboutUs/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/feedback' element={<Feedback/>}/>
<Route path = '*' element ={<NotFound/>}/>


      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
