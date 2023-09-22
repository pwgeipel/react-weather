import React from "react";

function SavedCities() {
  const cities = [
    {
      id: 1,
      name: "Milwaukee",
    },
    {
      id: 2,
      name: "Belo Horizonte",
    },
    {
      id: 3,
      name: "Boulder",
    },
    {
      id: 4,
      name: "Reykjavík",
    },
  ];

  return <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-xl font-medium">{city.name}</button>
      ))}
    </div>
  
}

export default SavedCities;
