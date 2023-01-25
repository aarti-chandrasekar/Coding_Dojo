import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import StyledDiv from './StyledDiv';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/:value"} element={<DisplayVal />} />
          <Route path={"/:textCol/:bgCol"} element={<DisplayColText />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


const Home = () => {
  return (
    <div>
      <h1> Welcome </h1>
      <Link to="/about"> Go to About Page </Link>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1> About Blah Blah </h1>
      <Link to="/home">Home</Link>
    </div>
  )
}

const DisplayVal = () => {
  const {value} = useParams();
  return (
    <div>
      {isNaN(value) ? <h3>The word is {value}</h3> : <h3>The number is {value}</h3>}
    </div>
  )
}

const DisplayColText = () => {
  const {textCol, bgCol} = useParams();

  return (
    <StyledDiv textCol={textCol} bgCol={bgCol}>
      Hello !
    </StyledDiv>
  )
}
