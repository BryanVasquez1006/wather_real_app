import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';

function SearchDetails({setCity, setShowForm}) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [show, setShow] = useState(false); //OFFCANVAS
  const [inputvalue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SearchResult = async () => {
    const url = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${inputvalue}`;
  
    try {
      if (inputvalue.trim() === '') {
        return alert('Please input a valid address');
      }
  
      const response = await axios.get(url);
      const data = response.data;
  
      if (data.length === 0) {
        return alert('No results found');
      }
  
      setResults(data);
      setInputValue('');
    } catch (error) {
      console.log('Error:', error.message);
      alert('An error occurred while searching');
    }
  };

  const handleSelectedLocation = (x) => {
    setCity(x);
    setShowForm(false);
  };
  
  console.log(results)
 

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn-secondary rounded-0 shadow-lg">
        Search for places
      </Button>

      <Offcanvas className="Offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <form className="d-flex">
            <input
              className="form-control"
              type="text"
              placeholder="search location"
              value={inputvalue}
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button className="btn btn-secondary" type="button" onClick={SearchResult}>
              Search
            </button>
          </form>
          {
                
                results.map((result , index) => {
                    return (
                        <div key={index} onClick={()=> {handleSelectedLocation(result.url)}} className=' cursor-pointer flex  justify-between  bg-slate-500 py-2 px-1' >
                            <p className=''>{result.name}</p>
                            <p className='text-gray-400'>{result.country}</p>
                        </div>
                    )
                })
            }
        </Offcanvas.Body>
      </Offcanvas>    
    </>
    
  );
}

export default SearchDetails;