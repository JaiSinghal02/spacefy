import React from "react";
import './Header.css'
import tick from '../../assets/images/tick-sign.png'
import star from '../../assets/images/star-shape.png'

export default function Header(){
    return(
        <div className="header-container">
            <div className="header-div">
                <div className="header-first-container">
                    <div className="header-first-div">
                        Live Spaces
                    </div>
                </div>
                <div className="header-second-container">
                    <div className="header-second-div">
                        <div className="header-second-tick-div">
                            <img src={star} alt="star" className="star-shape"/>
                            <img src={tick} alt="tick" className="tick-sign"/>
                        </div>
                        <div className="header-second-para-div">
                            All NFTs on Cyber either belong to or were minted by their space creator.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}