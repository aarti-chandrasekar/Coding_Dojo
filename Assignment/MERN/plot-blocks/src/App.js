import './App.css';
import Ad from './components/Ad';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SubContent from './components/SubContent';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main styleSel={0}>
        <SubContent />
        <SubContent />
        <SubContent />
        <Ad />
      </Main>
    </div>
  );
}

export default App;
