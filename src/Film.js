import React from "react";
import "./Film.css"

function Film(props) {
    return(
        <>
        <div className="filmBanner">
            <img src={props.image} alt="film" />   
            <div className="bgGrad">
                <h2>Prime Video: Recommend to you</h2>
                <h3>Watch {props.title} NOW!</h3>
            </div>
        </div>
        </>
    );
}

export default Film;