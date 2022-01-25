import React from 'react';

export default function SearchBar(onSearch) {
  // acá va tu código
  function handleOnSearch(){
    if(typeof onSearch ==="function"){
      const input = document.getElementById("search-bar-imput");
      onSearch(input.value);
    }
  }
  return (
    <div>
      <input id="search-bar-imput" />
      <button onClick={handleOnSearch}> Agregar</button>  
    </div>
  );
};