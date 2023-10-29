import React from 'react'
import {Navbar, NavbarBrand} from "reactstrap";


const navbar = (props) => {
  return (
    
        
      <Navbar color="light" light expand="md">
        <NavbarBrand className="nav-brand" onClick={()=> {
          props.setPage(0);
        }}>
        Pizza Hat
        </NavbarBrand>
      </Navbar>

    
  )
}

export default navbar
