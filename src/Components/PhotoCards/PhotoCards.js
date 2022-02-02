import React from "react";
import './PhotoCards.css'
import PhotoCard from "./PhotoCard/PhotoCard";


export default function PhotoCards(props){
    console.log(props.photoData)
    return(
        <div className="photocards-container">
            {props.photoData[props.index].photo.map((el,index)=>{
                return <PhotoCard imageUrl={el.url} key={index} author={el.author} description={el.description}/>
            })}
        </div>
    )
}