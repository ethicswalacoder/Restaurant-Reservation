import React from 'react'
import { Row, Col, Button } from 'reactstrap'

const Main = (props) => {
  return (
    <div>
     <Row  className="text-center align-items-center pizza-cta">
      <Col>
      <p className="looking-for-pizza">
        If you are looking for a great Pizza
        <i className="fa-solid fa-pizza-slice pizza-slice"></i>
      </p>
      <button color='none' className="bookTable-btn" onClick={()=> {
        props.setPage(1);
      }}>
 Book a Table
      </button>
      </Col>
     </Row>
     <Row  className="text-center big-img-container">
    <Col>
    <img  src={require("../images/cafe.jpg")} alt='cafe' className="big-img"/>

    </Col>
     </Row>
    </div>
  )
}

export default Main
