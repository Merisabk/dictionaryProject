import React from 'react';
import Search from './Search';
import axios from 'axios';

const Dictionary = () => {
    return (
        <>
        <h2>Dictionary</h2>
        <h4>What word do you want to look up?</h4>
        <Search />

        </>
    )
}

export default Dictionary;