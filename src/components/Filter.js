import React from 'react';

/**
 *  showGreasedHogs is App.js showGreasedHogs state variable
 *  changeShowGreasedHogs is App.js setShowGreasedHogs state setter 
 *  changeSort is App.js setSort state setter
 */
function Filter({showGreasedHogs, changeShowGreasedHogs, changeSort,}) {
    
    function handleChangeSort(showName) {
        (showName) ? changeSort("name") : changeSort("weight");
    }
    
    function handleShowGreasedHogs() {
        changeShowGreasedHogs(((showGreasedHogs) => !showGreasedHogs));
    }
  
    return (
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <div className="two fields"> 
  
                    <div className="field"> 
                        <div className="ui button" onClick={() => {handleChangeSort(true)}}>Sort Hogs by Name</div>
                        <div className="ui button" onClick={() => {handleChangeSort(false)}}>Sort Hogs by Weight</div>
                    </div>
    
                    <div className="field">
                        <div className="ui button" onClick={handleShowGreasedHogs}>
                            {(showGreasedHogs) ? "Show All Hogs" : "Show Greased Hogs Only"}</div>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default Filter;