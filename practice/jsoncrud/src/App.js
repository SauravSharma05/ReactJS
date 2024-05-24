import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import Addnew from './Addnew';
import "../node_modules/bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
  <BrowserRouter>
      <Routes>
      <Route path='/' element={<Mainpage />}></Route>     
      <Route path='/addnew' element={<Addnew />}></Route>
      </Routes>
  </BrowserRouter>
        
    </div>
  );
}

export default App;
