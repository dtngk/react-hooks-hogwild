import React, { useState } from "react";

/**
 *  newHog is App.js addHog function
 */
function HogForm({newHog}){

    const [name, setName] = useState("");
	const [weight, setWeight] = useState("");
	const [specialty, setSpecialty] = useState("");
    const [greased, setGreased] = useState(false);
	const [medal, setMedal] = useState("none");
    const [image, setImage] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if((name !== "") && (weight !== "") && (specialty !== "") && (image !== "")){
            const addHog = {
                name: name,
                weight: weight,
                specialty: specialty,
                greased: greased,
                "highest medal achieved": medal,
                image: image,
            }

            newHog(addHog);
            resetAll();
        }

    }

    function resetAll(){
        setName("");
        setWeight("");
        setSpecialty("");
        setGreased(false);
        setMedal("none");
        setImage("");
    }

    function handleNameClick(event){
        setName(event.target.value);
    }

    function handleWeightClick(event){
        setWeight(event.target.value);
    }

    function handleSpecialtyClick(event){
        setSpecialty(event.target.value);
    }

    function handleGreasedClick(event){

        if(event.target.value === "false"){
            setGreased(false);
        }else{
            setGreased(true);
        }    
    }

    function handleImageClick(event){
        setImage(event.target.value);
    }

    function handleMedalClick(event){
        setMedal(event.target.value);
    }

    return (
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <div className="five fields">

                    <div className="field" >
                        <label>Name</label>
                        <input placeholder="Name" type="text" value={name} onChange={handleNameClick}/>
                    </div>

                    <div className="field" >
                        <label>Weight</label>
                        <input placeholder="Weight" type="text"value={weight} onChange={handleWeightClick}/>
                    </div>

                    <div className="field" >
                        <label>Specialty</label>
                        <input placeholder="Specialty" type="text" value={specialty} onChange={handleSpecialtyClick}/>
                    </div>

                    <div className="field">
                        <label>Greased Hog?</label>
                        <select className="ui selection dropdown" value={greased} onChange={handleGreasedClick}>
                            <option value="true">true</option>
                            <option value="false">false</option>
			            </select> 
                    </div> 

                    <div className="field" >
                        <label>Highest medal achived: </label>
                        <select className="ui selection dropdown" value={medal} onChange={handleMedalClick}>
                            <option value="none">none</option>
                            <option value="wood">wood</option>
                            <option value="bronze">bronze</option>
                            <option value="silver">silver</option>
                            <option value="gold">gold</option>
                            <option value="platinum">platinum</option>
                            <option value="diamond">diamond</option>
			            </select> 
                    </div>

                </div>

                <div className="field"  >
                    <label>Image URL</label>
                    <input placeholder="Image URL" type="text" value={image} onChange={handleImageClick}/>
                </div>
                <div className="ui submit button" onClick={handleSubmit}>Add Hog</div>
            </div>
        </div>
      );
}

export default HogForm;