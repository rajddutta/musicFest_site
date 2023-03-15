import React from 'react'
import './SearchStyle.css'

// import Tent from '../../asstes/pexel.jpg'


const Search = () => {
  return (
    <div name='buy' className='search'>
      <div className='container'>
        <div className='left'>
          <h2>CREATES FRIENDSHIPS , SHARE</h2>
            <p>DreamVille is a vibrant place: a home to tens of thousands Villagers during their stay at Tomorrowland. A welcoming village where the People of Tomorrow eat, sleep, live and enjoy their 5-day experience. Here, people from all walks of life meet and international friendships are made.We offer a wide range of accomadation, so everyone can find a place to fall in love with.To cater to different needs, there are a variety of packages, each with its own peaks.</p>
          <div className='search-col-2'>
            <div className='box'>
              <div>
                {/* <img src={Tent} alt='/' /> */}
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className='box'>
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='promo'>
            <h4 className='save'>GET AN ADDITIONAL 7% OFF</h4>
            <p className='timer'>12 HOURS LEFT!</p>
            <p className='offers'>VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className='input-wrap'>
              <label>Destination</label>
              <select>
                <option value='1'>South Goa</option>
                <option value='1'>London</option>
                <option value='1'>Budapest</option>
                <option value='1'>Sao Paulo</option>
              </select>
            </div>
            <div className='date'>
              <div className='input-wrap'>
                <label>Check In</label>
                <input type='date' />
              </div>
              <div className='input-wrap'>
                <label>Check Out</label>
                <input type='date' />
              </div>
            </div>
            <button>Rates & Availabilities</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Search