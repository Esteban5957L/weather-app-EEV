/* funcion para la temperatura
- toma valores del label y del value, 
hace un destructuring para obtener los datos y directamente los retoma
*/
import styles from "./CardTemp.module.css";

function CardTemp({label, value}){
    return(
      <div className={styles.cardTemp}>
          <label>{label}</label>
          <span>{value}</span>
      </div>
    );
  }

  export default CardTemp;