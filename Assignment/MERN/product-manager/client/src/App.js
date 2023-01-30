import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

import './App.css';
import Main from "./views/Main";
import ProductView from "./views/ProductView";

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/:id"} element={<ProductView />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
