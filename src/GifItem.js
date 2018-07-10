import React from "react";

const GifItem =(props) => {
    return(
        <div>
            <img src={props.gif} alt='' />             
        </div>
    );
}
export default GifItem;