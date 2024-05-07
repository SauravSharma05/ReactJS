import React from 'react'


 function Body1() {
  return (
    <div>
       

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

        <div className='Header2 df jcs fdc w70'>
            <div className='Headerb1 df aic txt1'>Looking for perfect stay?</div>
            <div className='Headerb1 df aic'>Travellers with similar searches booked these properties</div>
        </div>

        <div className='pbox w70 df fdc'>
            <div className='Headerb1 df aic txt1'>Home guests love</div>
            <div className='Headerb2 df jcsb'>
                  <div className='pcard df fdc'>
                        <div className='cimg'>
                          <img src='logo512.png'></img>
                        </div>
                        <div className='txt1'>Aparthhotel Stare Miastro</div>
                        <div className='txt2'>Old Town, Poland, Krakow</div>
                        <div className='txt2'>Starting from Rs 9391</div>
                  </div>
                  <div className='pcard df fdc'>
                        <div className='cimg'>
                          <img src='logo512.png'></img>
                        </div>
                        <div className='txt1'>Aparthhotel Stare Miastro</div>
                        <div className='txt2'>Old Town, Poland, Krakow</div>
                        <div className='txt2'>Starting from Rs 9391</div>
                  </div>
                  <div className='pcard df fdc'>
                        <div className='cimg'>
                          <img src='logo512.png'></img>
                        </div>
                        <div className='txt1'>Aparthhotel Stare Miastro</div>
                        <div className='txt2'>Old Town, Poland, Krakow</div>
                        <div className='txt2'>Starting from Rs 9391</div>
                  </div>
            </div>
        </div>

    </div>
  )
}


export default Body1;