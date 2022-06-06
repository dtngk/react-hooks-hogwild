import React from "react";
import Hog from './Hog'
import { v4 as uuid } from "uuid";

/**
 *  hogs is App.js hogsToDisplay array
 */
function HogList({ hogs }) {

    const showFilteredHogs = hogs.map(hog => (
        <Hog
            key={uuid()}
            hog={hog}
        />
    ))

    return (
		<div className="ui four stackable cards">
			{showFilteredHogs}
		</div>
    );
}

export default HogList;