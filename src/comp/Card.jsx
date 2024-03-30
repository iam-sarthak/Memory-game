import React from "react";

function Card({card, index, clickhandle}) {
    return <div className={`card ${card.status}`} onClick={()=> clickhandle(index)}>
         <img src={card.img} ></img>
    </div>
}

export default Card;