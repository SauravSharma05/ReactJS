import logo from './logo.svg';
import './App.css';

function Header1() {
  return (
    <div className="App">

        <div className='bgcolohead'>

        <div className='Header1 df jcsb w70'>
        <div className='Headera df aic'>
          <img src='images/logo_bbo.png'></img>
        </div>
        <div className='Headerb df'>
            <div className='Headerb1 df aic'>India</div>
            <div className='Headerb1 df aic'>
              <img className='bharat' src='images/bharat.png'></img>
            </div>
            <div className='Headerb1 df aic'>help icon</div>
            <div className='Headerb1 df aic'>List your property</div>
            <div className='Headerb1 btn df aic'><button className='regbut'>Register</button></div>
            <div className='Headerb1 btn df aic'><button className='regbut'>Sign in</button></div>
        </div>
        </div>
        <div className='Header1 df jcs w70'>
            <div className='Headerb1 df aic'>Stays</div>
            <div className='Headerb1 df aic'>Flights</div>
            <div className='Headerb1 df aic'>Flight + Hotel</div>
            <div className='Headerb1 df aic'>Car Rentals</div>
            <div className='Headerb1 btn df aic'>Attractions</div>
            <div className='Headerb1 btn df aic'>Airport taxis</div>
        </div>
        </div>
        
        <div className='bghead'>

        <div className='Header2 df jcs fdc w70'>
            <div className='Headerb1 df aic txt1'>Find your next stay</div>
            <div className='Headerb1 df aic'>Search deals on hotels, homes and much more... </div>
        </div>

        <div className='Searchbox w70 df'>
            <div className='Dd1'>
              <select className='w100'>
                    <option>A</option>
                    <option>B</option>
              </select>
            </div>
            <div className='Dd1'><input className='w100' type='date'></input></div>
            <div className='Dd1'>
              <select className='w100'>
                    <option>A</option>
                    <option>B</option>
              </select>
            </div>
            <div className='Dd1'><button className='butcol'>Search</button></div>
        </div>
          </div>
  
    </div>
  );
}

export default Header1;
