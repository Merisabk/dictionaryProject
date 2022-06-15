import React, {useState} from 'react';
import axios from 'axios';
import Result from './Results';

const Search = () => {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(res) {
        console.log(res.data)
        setResults(res.data[0]);
    }

    const search = (event) => {
        event.preventDefault();

        //api documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);


    
    }
    const handleKeywordChange = (event) => {
        event.preventDefault();
        setKeyword(event.target.value);
    }


    return (
        <>
        <form onSubmit={search}>
        <input type="search" onChange= {handleKeywordChange} placeholder="search word" autoFocus={true} />
        <button>Search</button>
        </form>

        <Result result={results}/>
      
        </>
    )
}
export default Search;