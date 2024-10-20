import React, { useState } from 'react';
import './Country.css'


const Country = ({country,  handleVisitedCountries}) => {

//    console.log(handleVisitedCountries);
   const {name,flags,area,population}=country;
   const [borderStyles, setBorderStyles] = useState({
    border: '2px solid gray',
    borderRadius: '5px',
    padding: '10px',
  });
   const visitHandler=(country)=>{
    //    alert(x);
    // console.log(country);
      setBorderStyles({...borderStyles,backgroundColor:'green',color:'white'});
   }
  
    return (
        <div className='country'>  

            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Area: {area} km<sup>2</sup>  </h3>
            <h3>Population:{population}</h3>
            <button
            onClick={() => {
             visitHandler({ country });
             handleVisitedCountries({country});

          
             }}
         style={borderStyles} >
     Mark As Visited
     </button>
            
        </div>
    );
};

export default Country;