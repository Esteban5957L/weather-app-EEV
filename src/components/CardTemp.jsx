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

  export default CardTemp;