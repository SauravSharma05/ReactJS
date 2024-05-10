import logo from './logo.svg';
import './App.css';
import Fetching from './Fetchingapi';
import Hook1 from './Hook1';

function App() {
  return (
    <div className="App">
      { <Fetching/> }
      { <Hook1/> }
    </div>
  );
}

export default App;
