import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';

function Searchform({setCity , setShowForm}) {
    const API_KEY = process.env.REACT_APP_API_KEY

    const [ searchValue , setSearchValue] = useState('')
    const  [ results , setResults] = useState([])
    const [warning  , setWarning] = useState('')


    const  searchResult = async () => {
        const url = 'https://api.weatherapi.com/v1/search.json?key='+API_KEY+'&q='+searchValue


        try{
            if(searchValue.trim() === ''){
                return setWarning('Search input can not be empty')
            }
            const  response = await fetch(url)
            const  data = await response.json()
            setResults(data)
            setSearchValue('')
            
        }catch{
            console.log('no search')
        }

    }

    const  handleSelectedLocation = (x) => {
        setCity(x)
        setShowForm(false)
    }
}