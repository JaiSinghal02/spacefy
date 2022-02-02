import React from "react";
import './PhotoCard.css'


export default function PhotoCard(props){
    return(
        <div className="photocard-container">
            <div className="photocard-div">
                <div className="photocard-image">
                    <img src={props.imageUrl} alt="unsplash"/>
                </div>
                <div className="photocard-content">
                    <div className="photocard-content-title">{props.description?props.description.split(" ").slice(0,3).join(" "):'Explore the space'}</div>
                    <div className="photocard-content-tag">
                        <div className="photocard-content-button">
                            <div className="photocard-button-content">@{props.author.username.length>10?props.author.username.slice(0,10)+'...':props.author.username}</div>
                            <div className="photocard-button-content photocard-button-id">{props.author.id.length>10?props.author.id.slice(0,10)+'...':props.author.id}</div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}