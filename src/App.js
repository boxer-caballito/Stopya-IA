import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Init from './components/Init';
import MoreInfo from './components/MoreInfo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Init/>
      <MoreInfo/>
    </div>
  );
}

export default App;
