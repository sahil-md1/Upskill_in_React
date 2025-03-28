import React from "react";

const MapFun = () => {
  const name = [
    "Anil",
    "Raju",
    "Shayam",
    "Mona",
    "Sumona",
    "Naatukaka",
    "GhanShyam",
  ];
  return (
    <div>
      <h1>
        {name.map((items, key) => {
            console.log(items, key , 'map');
            
            return(
                <div>
                    {items}
                </div>
            )
        })}
      </h1>
    </div>
  );
};

export default MapFun;
