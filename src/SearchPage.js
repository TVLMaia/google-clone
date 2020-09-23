import React from 'react';
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

//https://developers.google.com/custom-search/v1/using_rest

//https://cse.google.com/cse/create/new


    return (
        <div className='searchPage'>
        <div className='searchPage__header'>
            <h1>Você pesquisou isso, seu troxa >>{term}</h1>


        </div>

        <div className='searchPage__results'>


        </div>

        </div>
    )
}

export default SearchPage
