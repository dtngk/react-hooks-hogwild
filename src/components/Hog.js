import React, { useState } from "react";

/**
 *  hog is HogList.js hog object from the .map function
 */
function Hog({hog}){
    
    const [showDetails, setShowDetails] = useState(false);
    const [hideHog, setHideHog] = useState(false)

    function handleDetailsClick() {
        setShowDetails((showDetails) => !(showDetails));
    }

    function showHog(){
        setHideHog(true);
    }

    const showHogDetails = (
        
        <div className="content">
        <div>Weight: {hog.weight}</div>
        <div>Specialty: {hog.specialty}</div>
        <div>{(hog.greased) ? "Greased " : "Nongreased " } Hog</div>
        <div>Highest medal achived: <b>{hog["highest medal achieved"]}</b></div>
        </div> 
    );

    if(hideHog){
        return null;
    }

    return (
        <div className="ui purple card">
            <div className="image">
                <img src={hog.image} alt="hogPic" />
            </div>
            
            <div className="content">
                <div className="name"><strong>{hog.name}</strong></div>
            </div>
            
            {showDetails ? showHogDetails : null}

            <div className="ui two bottom attached buttons">
                <div className="ui primary button" 
                    onClick={handleDetailsClick}>{(showDetails) ? "Hide Details" : "Show Details"}</div>
                <div className="ui button" onClick={showHog}>Hide Hog</div>
            </div>        
        </div>
    );
}

export default Hog;