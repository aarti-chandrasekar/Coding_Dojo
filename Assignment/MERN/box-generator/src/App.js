import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BoxForm } from "./components/BoxForm";
import { Box } from './components/Box';

function App() {
  const [boxList, setBoxList] = useState([]);

  const addToBoxList = (color, size) => {
    setBoxList([...boxList, color + "-" + size]);
  }

  return (
    <div className="App">
      <BoxForm updateBoxList={addToBoxList} />

      <div className='d-flex flex-wrap'>
        {boxList.map((value, index) => {
          const [color, size] = value.split("-");
          return (< Box key={index} color={color} size={size + "px"} />);
        }
        )}
      </div>
    </div>
  );
}

export default App;
