import React from 'react';
import styles from "./SearchBar.module.css";
import {IoSearchSharp} from 'react-icons/io5'

export default function SearchBar({onSearch}) {
  // acá va tu código
  function handleOnSearch(){
    if(typeof onSearch === "function"){

      // document.getElementById = Devuelve una referencia al elemento por su ID.
      const input = document.getElementById("search-bar-input");
      onSearch(input.value)
    }
  }
  return (<div className={styles.searchBar}>
    <input id="search-bar-input" placeholder="Agrega una nueva ciudad..."/>
    <button onClick={handleOnSearch}><IoSearchSharp/></button>
  </div>

  );
};