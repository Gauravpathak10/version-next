import logo from './assets/unnamed.png';
import './App.css';
import data from './weather.json'
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi'


function App() {
  const [currentWeather, setCurrent] = useState(data[0])

  const checkStatus = (e) => {
    const status = data.filter((l) => {
      return l.id == e.target.id
    })
    setCurrent(status[0])
  }

  const filteredOption = (e) => {
    const status = data.filter((l) => {
      return l.id == e.target.value
    })
    setCurrent(status[0])
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
            <h2>{currentWeather.temp}</h2>
            <h2>{currentWeather.climate}</h2>
          </div>
          <div style={{ display: "flex", }}>
            <div>
              <h1>
                Humidity
              </h1>
              <h2>  {currentWeather.humidity}</h2>
            </div>
            <hr />
            <div>
              <h1>
                Wind
              </h1>
              <h2>  {currentWeather.wind}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='filter'>
        <span> <BiSearch /></span>
        <select onChange={filteredOption}>
          {data.map((list, i) => {
            return <option key={i} value={list.id}>{list.country}</option>
          })}
        </select>
      </div>
      <div className='box-list'>
        {data.map((list => {
          return <a key={list.id} id={list.id} style={{ background: list.color }} title={list.country} onClick={checkStatus}>{list.country}</a>
        }))}
      </div>
    </>

  );
}

export default App;
