import React from "react";
import './Shows.css'


function Shows()
{
    
    return(
        <div className="mt-4 shobac bg-gradient">
        <img src="https://wallpapercave.com/wp/wp2913490.jpg" width="300" height="200"></img>
        <img className="" src="https://i0.wp.com/www.kspb.se/wp-content/uploads/2019/11/wipe-car-interior-scaled.jpg?fit=1920%2C1282&ssl=1"
         width="300" height="200" style={{paddingLeft: 30}}></img>
         <br></br>
         <img className="mt-2" src="https://www.shinefactory.co.uk/Upload/0InteriorautodetailinginLondon.jpg"
          width="300" height="200"></img>
         <img className="mt-2" src="https://assets.website-files.com/5ce53c519878ac83a4cbf407/5cec89da38469c55dfb0e349_BrushExterior-min.jpg"
          width="300" height="200" style={{paddingLeft: 30}}></img>
        </div>

    );
}

export default Shows;