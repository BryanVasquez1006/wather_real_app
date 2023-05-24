import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../stylesheets/NavBar.css"

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='btn-secondary rounded-0 shadow-lg'>
        Search for places
      </Button>

      <Offcanvas className= "Offcanvas"  show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className='d-flex'> 
            <input className='form-control'type='text' placeholder='search location'></input>
            <button className='btn btn-secondary' type='button'>Search</button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;