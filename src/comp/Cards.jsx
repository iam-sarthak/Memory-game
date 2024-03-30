import React, { useRef, useState } from "react";
import { ReactDOM } from "react";
import Card from "./Card";
import lvl from "./levels";

function Cards(params) {

    const [level, setlevel] = useState(lvl[0])
    const [cards, setcards] = useState(level.sort(()=> Math.random() - 0.5))


    const [Previouscardstatus, setPreviouscardstatus]  = useState(-1)
    const PreviousIndex = useRef(-1);

    const checksame = (index)=>{
        if(cards[index].id===cards[Previouscardstatus].id){
             cards[index].status= 'active matched';
             cards[Previouscardstatus].status= 'active matched';
            setPreviouscardstatus(-1);
        }else{
            cards[index].status='active';
            setcards([...cards]);
            

            setTimeout(()=>{
                setPreviouscardstatus(-1);
                cards[index].status = 'unmatch';
                cards[Previouscardstatus].status = 'unmatch';

            },1000);
        }
    }

    const clickHandle = (index) =>{
        if (index !== PreviousIndex.current) {
            if(cards[index.status==='active matched']){
                alert('already matched');
            }else{
                if (Previouscardstatus===-1) {
                    PreviousIndex.current=index;
                    cards[index].status = 'active';
                    setPreviouscardstatus(index);
                    setcards([...cards]);
                }else{
                    checksame(index);
                    PreviousIndex.current=-1;
                }
            }
        }else{
            alert("already selected");
        }
    }
    return (
        <div className="container">
            {
                cards.map((card, index)=>{
                    return <Card card={card} key={index} index={index} clickhandle={clickHandle}/>
                })
            }
        </div>
    )
}
export default Cards;