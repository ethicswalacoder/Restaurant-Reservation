import React, {useState} from 'react'
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button
} from "reactstrap";

const Book = () => {

  const [totalTables, setTotalTables] = useState([]);

  //User's Selections
  const [selection, setSelection] = useState({
    table: {
      name: null,
      id:null
    },
    date: new Date(),
    time:null,
    location: "Any Location",
    size: 0

  });
  //user's booking details
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    email: ""
  });

  //potential location
const [locations] = useState(["Any Location", "patio", "Inside"])
const [times] = useState([
  "9AM",
  "10AM",
  "11AM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM"
])

//Basic reservation "validation"
const [reservationError, setReservationError] = useState(false);
const getDate = ()=> {
  const months =[
    "January", "February", "March", "April","May", "June", "July"," August", "September", "October", "November", " December"
  ];
  const date = months[selection.date.getMonth()] + " " + selection.date.getDate() + " " + selection.date.getFullYear();
  let time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
  console.log(time);
  const dateTime = new Date(date + " " + time);
  return dateTime;
};
const getEmptyTables = () => {
  let tables = totalTables.filter(table => table.isAvailable);
  return tables.length;
}

  return (
    <div>
      book page
    </div>
  )
}

export default Book
