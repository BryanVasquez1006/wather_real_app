import React from "react";
import  ProgressBar  from "react-bootstrap/ProgressBar";



export default function Footer({info}) {
  return (
      <div className="container row">
        <h2 className="today">Today's Highlights</h2>
      <div className="col col-lg-6">
        <div className="container highlight-container  d-flex flex-column justify-content-center align-items-center">
          <h3 className="">Wind status</h3>
          <div className="wind-speed d-flex">
            <h1 className="wind-speed-i">{info.current.wind_mph}</h1>
            <p className="wind-speed-i">mph</p>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="col col-lg-6">
        <div className="container highlight-container d-flex flex-column justify-content-center align-items-center">
          <h3 className="">Humidity</h3>
          <div className="">
            <h1 className="wind-speed-i">{info.current.humidity}%</h1>
            <div className="container">
              <ProgressBar now={info.current.humidity} variant="warning" className="bg-white"/>
            </div>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="col col-lg-6">
        <div className="container highlight-container-small d-flex flex-column justify-content-center align-items-center">
          <h3 className="">Visibility</h3>
          <div className="wind-speed d-flex">
            <h1 className="wind-speed-i">{info.current.vis_miles}</h1>
            <p className="wind-speed-i">miles</p>
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="col col-lg-6">
        <div className="container highlight-container-small  d-flex flex-column justify-content-center align-items-center">
          <h3 className="">Air Pressure</h3>
          <div className="wind-speed d-flex">
            <h1 className="wind-speed-i">{info.current.pressure_in}</h1>
            <p className="wind-speed-i">mb</p>
          </div>
        </div>
      </div>
    </div>
  );
}
