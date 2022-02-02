import React from "react";
import "./Tag.css"

export default function Tag(props){
    return(
        <div className={`tag-div${props.selected?' tag-selected':''}`} onClick={props.clickHandler}>
                {props.image?
                    <div className="tag-image-div">
                        <img src={props.image} alt="tag"/>
                    </div>
                    :null
                }
                <div className="tag-text-div">
                    {props.text}
                </div>
        </div>
    )
}