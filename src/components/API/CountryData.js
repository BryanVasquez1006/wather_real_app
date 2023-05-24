import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import AsideInformation from "../AsideInformation";
import WeatherCard from "../DetailedInformation";
import SearchDetails from "../OffCanvas";

export default function CountryData() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [nextdays, setNextdays] = useState([]);
  const [city, setCity] = useState('10001');
  const [isLoading, setIsLoading] = useState(true);
  const [showform, setShowForm] = useState(false);

  const API_KEY = "0bad43a6462a4c9fbc6111102232203";

  const getCurrentWeather = async (city) => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    try {
      const response = await axios.get(URL);
      const data = response.data;
      setCurrentWeather(data);
    } catch {
      console.log('There is a problem with fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  const futureWeather = async () => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      setNextdays(data.forecast.forecastday);
    } catch {
      console.log('There is a problem with the API');
    }
  };

  useEffect(() => {
    getCurrentWeather(city);
    futureWeather();
  }, [city]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          <div className="col-lg-4">
        <AsideInformation info={currentWeather}/>
        <SearchDetails setCity={setCity}  />
      </div>

      {/* CARDS */}
      <div className="col-lg-8">
        <div className="row">
          <div className="col col-sm-6 col-lg-2">
            <WeatherCard />
          </div>
          <div className="col col-sm-6 col-lg-2">
            <WeatherCard />
          </div>
          <div className="col col-sm-6 col-lg-2">
            <WeatherCard />
          </div>

          <div className="col col-sm-6 col-lg-2">
            <WeatherCard />
          </div>
          <div className="col col-sm-6 col-lg-2">
            <WeatherCard />
          </div>
        </div>
        <Footer info={currentWeather}/>
      </div>
        </div>
      )}
    </div>
  );
}


























// import axios from "axios";
// import React from "react";
// import { useState, useEffect, useCallback } from "react";
// import AsideInformation from "../AsideInformation";
// import Footer from "../Footer";
// import WeatherCard from "../DetailedInformation";

// export default function APIData() {
//   const API_KEY = process.env.REACT_APP_API_KEY;
//   const [currentWeather, setCurrentWeather] = useState({});
//   // const  [nextdays  , setNextdays] = useState([])
//   const [city, setCity] = useState("10001");
//   // const [temperaturefromat , setTumperature] = useState('c')

//   const CountryData = useCallback(
//     async (city) => {
//       const url =
//         "https://api.weatherapi.com/v1/current.json?key=" +
//         API_KEY +
//         "&q=" +
//         city;

//       try {
//         const response = await axios.get(url);
//         const data = response.data;
//         setCurrentWeather(data);
//       } catch {
//         console.log("There is a problem fetching data");
//       }
//     },
//     [API_KEY]
//   );

//   const futureWeather = useCallback(async () => {
//     const url =
//       "https://api.weatherapi.com/v1/forecast.json?key=" +
//       API_KEY +
//       "&q=" +
//       city +
//       "&days=3&aqi=no&alerts=no";

//     try {
//       const response = await axios.get(url);
//     } catch {
//       console.log("There is a problem with the API");
//     }
//   }, [API_KEY, city]);

//   useEffect(() => {
//     console.log(CountryData(city));
//     console.log(futureWeather());
//   }, [city, futureWeather, CountryData]);

//   return (
//     <>
//       <div className="col-lg-4">
//         <AsideInformation />
//       </div>

//       {/* CARDS */}
//       <div className="col-lg-8">
//         <div className="row">
//           <div className="col col-sm-6 col-lg-2">
//             <WeatherCard info={currentWeather} />
//           </div>
//           <div className="col col-sm-6 col-lg-2">
//             <WeatherCard info={currentWeather} />
//           </div>
//           <div className="col col-sm-6 col-lg-2">
//             <WeatherCard info={currentWeather} />
//           </div>

//           <div className="col col-sm-6 col-lg-2">
//             <WeatherCard info={currentWeather} />
//           </div>
//           <div className="col col-sm-6 col-lg-2">
//             <WeatherCard info={currentWeather} />
//           </div>
//         </div>
//         <Footer info={currentWeather} />
//       </div>
//     </>
//   );
// }
