import React from "react";
import {
  UilTemperatureHalf,
  UilWater,
  UilWind,
  UilSun,
} from "@iconscout/react-unicons";

function TempAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy with a chance of meatballs</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">55°</p>
        <div className="flex flex-col spacy-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperatureHalf size={20} className="mr-1" />
            Feels like:
            <span className="font-medium ml-1">42°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWater size={20} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">42%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={20} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">5 kph</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">05:55 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">05:55 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">05:55 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">05:55 AM</span>
        </p>
      </div>
    </div>
  );
}

export default TempAndDetails;
