import React from 'react';

export default function Card({max,min,name,img,onClose}) {

  /* evalua si lo que ingresa en mi "onClose" es una funcion */
  function handleOnClose(){
    if (typeof onClose === "function") onClose();
  }
  
  return (
    <div>
      <button onClick={handleOnClose}>x</button>

      <span>{name}</span>


{/*   en este bloque se repite el mismop codigo.
      Creamos una funcion que ingresando los valores ejecite lo mismo

      <div>
        <label>min</label>
        <span>{min}</span>
      </div>

      <div>
        <label>max</label>
        <span>{max}</span>
      </div> */}

      <CardTemp label="Min" value={min}/>
      <CardTemp label="Max" value={max}/>

      <img 
      src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
      alt="icono del clima"
      />

    </div>
  );
};

/* funcion para la temperatura
- toma valores del label y del value, 
hace un destructuring para obtener los datos y directamente los retoma
*/
function CardTemp({label, value}){
  return(
    <div>
        <label>{label}</label>
        <span>{value}</span>
      </div>
  );
}
