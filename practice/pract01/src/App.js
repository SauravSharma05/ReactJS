import logo from './logo.svg';
import './App.css';
import Fetching from './Fetchingapi';
import Hook1 from './Hook1';
import Classcomp from './Classcompo';
import Box from './Box';
import List from './List';

function App() {
  return (
    <div className="App">
      {/* { <Fetching/> } */}
      {/* { <Classcomp/> } */}
      { <Box/> }
      { <List/> }
      {/* { <Hook1/> } */}
    </div>
  );
}

export default App;
