import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';


function App() {
  const [list, setList] = useState([]);

  const fetchAPI = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=1279";
    fetch(url)
      .then(response => {
        return response.json();
      }).then(data => {
        // console.log(data);
        setList(data.results.map((item) => item.name))
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="row d-flex justify-content-center">
      <div className="flex-column bg-dark d-flex justify-content-center  w-50" >
        <input type="button" value="Fetch Pokemon" onClick={fetchAPI} />
        <ul className="mt-3 ">
          {list.map((item, index) => 
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
