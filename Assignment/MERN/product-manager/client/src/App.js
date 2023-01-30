import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

import './App.css';
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path={"/"} element={<ProductForm />} />
            {/* <Route path={"/:resourceParam/:idParam"} element={<SearchPage />} /> */}
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
