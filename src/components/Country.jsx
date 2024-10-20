import React, { useState } from 'react';
import './Country.css'



const Country = ({country,  handleVisitedCountries,handleVisitedFlags}) => {

// console.log(handleVisitedFlags);
   const {name,flags,area,population}=country;
   const [borderStyles1, setBorderStyles1] = useState({
    border: '2px solid gray',
    borderRadius: '5px',
    padding: '10px',
  });
  const [borderStyles2, setBorderStyles2] = useState({
    border: '2px solid gray',
    borderRadius: '5px',
    padding: '10px',
    margin: '15px'
  });
   const visitHandler=()=>{
    
    
      setBorderStyles1({...borderStyles1,backgroundColor:'green',color:'white'});
   }


   const [visited, setVisited]=useState(false);
   const goingHandler=()=>{
      
    setBorderStyles2({...borderStyles2, backgroundColor:'blue',color:'white'});
    setVisited(true);
 }
  
    return (
        <div className={`country ${visited? 'visited': 'country'}` }> 

            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Area: {area} km<sup>2</sup>  </h3>
            <h3>Population:{population}</h3>
            <button onClick={() => {
             visitHandler();
             handleVisitedCountries({country});
             handleVisitedFlags({country});
             
             

          
             }}
             style={borderStyles1} >
             Mark As Visited
            </button>
            
            <button style={borderStyles2}
              onClick={()=>{
                goingHandler();
              }} 
             > {visited? "Visited" : "Going"}
             
            </button>
            {visited? "I visited this country" : "I want to visit this country"}
            
            
            
        </div>
    );
};

export default Country;