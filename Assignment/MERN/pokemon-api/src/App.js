import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [list, setList] = useState([]);
  
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1279";

  const fetchAPI = () => {
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

  const axiosAPI = () => {
    axios.get(url)
      .then(response => {
        // console.log(response.data);
        setList(response.data.results.map((item) => item.name))
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="row d-flex justify-content-center">
      <div className="flex-column bg-dark d-flex justify-content-center  w-50" >
        <input type="button" value="Fetch Pokemon" onClick={axiosAPI} />
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
