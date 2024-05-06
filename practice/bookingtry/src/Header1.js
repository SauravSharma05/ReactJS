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
            <div className='Dd1'><button className='butcol'>Search</button></div>
        </div>

        <div className='Header2 df jcs fdc w70'>
            <div className='Headerb1 df aic'>Looking for perfect stay?</div>
            <div className='Headerb1 df aic'>Travellers with similar searches booked these properties</div>
        </div>

        <div className='pbox w70 df fdc'>
            <div className='Headerb1 df aic'>Home guests love</div>
            <div className='Headerb2 df jcsb'>
                  <div className='pcard df fdc'>
                        <div className='cimg'>
                          <img src='../public/logo192.png'></img>
                        </div>
                        <div className='txt1'>Aparthhotel Stare Miastro</div>
                        <div className='txt2'>Old Town, Poland, Krakow</div>
                        <div className='txt2'>Starting from Rs 9391</div>
                  </div>
                  <div className='pcard df fdc'>
                        <div className='cimg'>
                          <img src='../public/logo192.png'></img>
                        </div>
                        <div className='txt1'>Aparthhotel Stare Miastro</div>
                        <div className='txt2'>Old Town, Poland, Krakow</div>
                        <div className='txt2'>Starting from Rs 9391</div>
                  </div>
                  <div className='pcard df fdc'>
                        <div className='cimg'>
                          <img src='../public/logo192.png'></img>
                        </div>
                        <div className='txt1'>Aparthhotel Stare Miastro</div>
                        <div className='txt2'>Old Town, Poland, Krakow</div>
                        <div className='txt2'>Starting from Rs 9391</div>
                  </div>
            </div>
        </div>

        <div className='Stay w70 df fdc aic'>
              <div className='txt1'>Stay in the know</div>
              <div className='txt2'>Sign up to get marketing emails from Booking.com, including promotions, rewards, travel experiences, and information about Booking.com and Booking.com Transport Limited’s products and services.</div>
              <div className='butsy txt1 df'>
                <input type='email' placeholder='Your email address'></input>
                <button className='butsub butcol'>Subscribe</button>
              </div>
        </div>
    </div>
  );
}

export default Header1;
