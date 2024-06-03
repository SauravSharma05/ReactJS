import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Action';

function App() {
  const counter = useSelector(state=>state.count)
const dispatch =useDispatch()
  return (
    <div className="App">
      <button onClick={()=>{dispatch(decrement())}}>-</button>
     {counter}
     <button onClick={()=>{dispatch(increment())}}>+</button>

    </div>
  );
}

export default App;
