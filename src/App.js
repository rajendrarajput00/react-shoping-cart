//Import Dependencies
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
//import pages
//import TestApp from './TestApp';
import Home from './Pages/Home';
import { ProductCategory } from './Pages/ProductCategory';
import { ProductDescription } from './Pages/ProductDescription';
import { NavBarComponent } from './Components/NavBarComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-category/:categoryName" element={<ProductCategory />} />
          <Route path="/product-description/:productId" element={<ProductDescription />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
