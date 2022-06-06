import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import HogForm from "./HogForm";

import hogs from "../porkers_data";

console.log(hogs);

function App() {

	const [showGreasedHogs, setShowGreasedHogs] = useState(false);
	const [sort, setSort] = useState("name");
	const [allHogs, setHogs] = useState(hogs);

	const hogsToDisplay = allHogs
		.filter((hog) => {
			return ((hog.greased === showGreasedHogs) || (!showGreasedHogs));
		})
		.sort((hog1, hog2) => {
			if (sort === "weight") {
				return (hog1.weight - hog2.weight);
			} else {
				return (hog1.name.localeCompare(hog2.name));
			}
    	});

	function addHog(newHog){
		setHogs([...allHogs, newHog]);
	}

  	return (
		<div className="ui center aligned segment" >
			<div className="ui center aligned segment" >
				<Nav />
			</div>

			<div className="ui center aligned segment">
				<HogForm newHog={addHog}/>
			</div>

			<div className="ui center aligned segment">
				<Filter
					showGreasedHogs={showGreasedHogs}
					changeShowGreasedHogs={setShowGreasedHogs}
					changeSort={setSort}
				/>
			</div>
			<div className="ui center aligned segment">
				<HogList hogs={hogsToDisplay} />
			</div>
		</div>
  	);
}

export default App;