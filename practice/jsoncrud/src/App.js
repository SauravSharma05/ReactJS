import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import Addnew from './Addnew';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Viewuser from './Viewuser';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
      <Routes>
      <Route path='/' element={<Mainpage />}></Route>     
      <Route path='/addnew' element={<Addnew />}></Route>
      <Route path='/viewuser/:id' element={<Viewuser/>}></Route>
      </Routes>
  </BrowserRouter>
        
    </div>
  );
}

export default App;
