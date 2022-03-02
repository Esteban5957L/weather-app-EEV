import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';

const APIKEY = 'cf556410cbe7586eee4dba4575b443f9';

function App() {

  const [cities,setCities] = useState([])

  function handleRemoveCity(cityId){
    setCities((prevCities)=>{
      return prevCities.filter(
        (city)=>{return city.id !== cityId}
      )
    });
  }
  
  function onSearch(ciudad){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIKEY}&units=metric`)
    .then((respuesta)=>respuesta.json())
    .then((resource)=>{
      if(resource.main !== undefined){
        const city = {
          min: Math.round(resource.main.temp_min),
          max: Math.round(resource.main.temp_max),
          img: resource.weather[0].icon,
          id: resource.id,
          wind: resource.wind.speed,
          temp: resource.main.temp,
          name: resource.name,
          weather: resource.weather[0].main,
          clouds: resource.clouds.all,
          latitude: resource.coord.lat,
          longitud: resource.coord.lon
        };
        setCities(oldCities => [...oldCities, city]);
        } else {alert('City not found');}
      });
  }

  return (
    <div className="App">
      <div>
        <SearchBar onSearch={onSearch}/>
      </div>

      <hr />

      <div>
        <Cards
          cities={cities} onRemove={handleRemoveCity}
        />
      </div>
      
      <hr />
    </div>
  );
}

export default App;
