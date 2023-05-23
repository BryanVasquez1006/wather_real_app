
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
// import AsideInformation from "../AsideInformation";
import Footer from "../Footer";
// import WeatherCard from "../DetailedInformation";

export default function CountryData ({setCity, setShowForm}) {
    const API_KEY = process.env.REACT_APP_API_KEY
    const [searchValue , setSearchValue] = useState();
    const [results , setResults] = useState([]);
    
    const Data = () => {
        axios
        .get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid="+API_KEY)
        .then((res) => setResults(res.data))
        .catch((err) => console.error(err))
    };
    useEffect(() => Data(), []);
    console.log(results)


    return (
        <Footer info={results}/>
    )
    
}