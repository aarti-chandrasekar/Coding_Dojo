import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

import SearchPage from './components/SearchPage';

function App() {

  const fetchAPI = (resource, id) => {
    alert("It works " + id + " " + resource);
  }

  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path={"/"} element={<SearchPage />} />
            <Route path={"/:resourceParam/:idParam"} element={<SearchPage />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
