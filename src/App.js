import logo from './assets/unnamed.png';
import './App.css';
import data from './weather.json'
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { SlTarget } from 'react-icons/sl'


function App() {
  const [display, setDisplay] = useState(false);
  const [currentWeather, setCurrent] = useState(data[0]);
  const [inputVal, setinputVal] = useState('')

  const checkStatus = (e) => {
    const status = data.filter((l) => {
      return l.id == e.target.id
    })
    setCurrent(status[0])
  }

  const filteredOption = (e) => {
    setDisplay(false)
    const status = data.filter((l) => {
      return l.country === inputVal
    })
    setCurrent(status[0]);
  }



  return (
    <>
      <div style={{ backgroundImage: `url(${currentWeather.bg})` }}>
        <img src={logo} alt='logo' className='logo' />
        <div className="bg-country">
          <div>
            <h1 className='font-45'>
              {currentWeather.country}
            </h1>
            <h2 className='font-45'>{currentWeather.temp}</h2>
            <h2 className='font-35'>{currentWeather.climate}</h2>
          </div>
          <div className='flex-div'>
            <div>
              <h1 className='font-25 '>
                Humidity
              </h1>
              <h2>  {currentWeather.humidity}</h2>
            </div>
            <hr />
            <div>
              <h1 className='font-25 '>
                Wind
              </h1>
              <h2> {currentWeather.wind}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='filter' >
        <span> <BiSearch color='#007fa8' /></span>
        <input value={inputVal} onChange={(e) => setinputVal(e.target.value)} placeholder="Type to search" onClick={() => setDisplay(!display)} />
        <button className='filter-btn' onClick={filteredOption} ><SlTarget color='purple' /></button>
      </div>
      {display && (
        <div className="autoContainer">
          {data
            .filter(({ country }) => country.indexOf(inputVal.charAt(0).toUpperCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => setinputVal(value.country) + setDisplay(false)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.country}</span>
                </div>
              );
            })}
        </div>
      )}
      <div className='box-list'>
        {data.map((list => {
          return <a key={list.id} id={list.id} style={{ background: list.color }} title={list.country} onClick={checkStatus}>{list.country}</a>
        }))}
      </div>
    </>

  );
}

export default App;
