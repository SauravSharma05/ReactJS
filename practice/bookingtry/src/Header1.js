import logo from './logo.svg';
import './App.css';

function Header1() {
  return (
    <div className="App">


        <div className='Header1 df jcsb w70'>
        <div className='Headera df aic'>Booking.com</div>
        <div className='Headerb df'>
            <div className='Headerb1 df aic'>India</div>
            <div className='Headerb1 df aic'>flag</div>
            <div className='Headerb1 df aic'>help icon</div>
            <div className='Headerb1 df aic'>List your property</div>
            <div className='Headerb1 btn df aic'><button>Register</button></div>
            <div className='Headerb1 btn df aic'><button>Sign in</button></div>
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

        <div className='Header2 df jcs fdc w70'>
            <div className='Headerb1 df aic'>Find your next stay</div>
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
            <div className='Dd1'><button>Search</button></div>
        </div>

    </div>
  );
}

export default Header1;
