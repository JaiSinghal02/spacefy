import React,{useState} from "react";
import './TagBar.css'

import Tag from "./Tag/Tag";

import flame from '../../assets/images/flame.png'
import diamond from '../../assets/images/diamond.png'
import temple from '../../assets/images/temple.png'
import cyclone from '../../assets/images/cyclone.png'
import monkey from '../../assets/images/monkey.png'

export default function TagBar(props){
    const tagData = [ 
                        {image: flame,text:"24h Trending"},
                        {image: '',text:"Latest Shows"},
                        {image: '',text:"Most Popular"},
                        {image: diamond,text:"In Genesis"},
                        {image: temple,text:"In Temple"},
                        {image: cyclone,text:"In Void"},
                        {image: monkey,text:"#BAYC"},
                    ]
    return(
        <div className="tagbar-container">
            <div className="tagbar-div">
                {tagData.map((el,index)=>{
                    return(
                        <Tag text={el.text} image={el.image} key={index} clickHandler={(e)=>props.clickHandler(index)} selected={props.tagArray[index]}/>
                    )
                })}
            </div>
        </div>
    )
}