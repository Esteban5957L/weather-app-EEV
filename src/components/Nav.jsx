import React from "react";
import SearchBar from "./SearchBar";

function Nav({onSearch}){
    return(
        <>
            <SearchBar onSearch={onSearch} />
        </>
    );
}

export default Nav;