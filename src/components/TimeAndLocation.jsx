import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Monday, September 18, 2023 | Local time: 14:58 PM
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">Madison, WI</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
