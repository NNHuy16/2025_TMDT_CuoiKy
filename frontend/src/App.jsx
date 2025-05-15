
import './App.css'
import Home from "./pages/Home/Home.jsx";
import {BrowserRouter, Routes,Route}  from "react-router-dom";
import Category from "./pages/categorys/categorys.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";


function App() {

  return (
    <>
    <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category' element={<Category />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
