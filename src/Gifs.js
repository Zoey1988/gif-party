import React from "react";
import GifItem from './GifItem.js';
import './css/Gifs.css';

const Gifs = (props) => {    
    let gifDivs = props.gifs.map(gif => (
            <GifItem key={gif[0]} gif={gif[1]}/> 
    ));
    return (
    <div className="container">
        <h2>Gif of the Day:</h2>
        {gifDivs}
    </div>);
}

export default Gifs;