import React from 'react';
import PropTypes from 'prop-types'
import styles from './Card.module.css'
import {IoCloseCircleOutline} from 'react-icons/io5'
import CardTemp from './CardTemp';
import icon_03d from '../assets/03d.png'
import icon_09d from '../assets/09d.png'

export default function Card({max,min,name,img,onClose}) {

  /* evalua si lo que ingresa en mi "onClose" es una funcion */
  function handleOnClose(){ 
    if (typeof onClose === "function") onClose();
  }
  
  return (
    <div className={styles.card}>
      <button className={styles.closeButton} onClick={handleOnClose}>
        <IoCloseCircleOutline />  
      </button>

      <span className={styles.cityName}>{name}</span>

      <CardTemp label="Min" value={min}/>
      <CardTemp label="Max" value={max}/>
      <WeatherIcon icon={img}/>
     
    </div>
  );
};

function WeatherIcon({icon}){
  switch(icon){
    case '09d': return < img src={icon_09d} alt='	shower rain'/>;
    default: return < img src={icon_03d} alt='scattered clouds'/>;
  }
}




//-Testea el dato que me ingresa
Card.propType = {
  max:PropTypes.number,
  min:PropTypes.number,
  name:PropTypes.string,
  img:PropTypes.string,
  onClose:PropTypes.func,
};
