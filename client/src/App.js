import { useState } from "react";
import Navbar from "./components/Navbar";
import { Nav } from "reactstrap";
import Main from "./components/Main";
import Book from "./components/Book";
import ThankYou from "./components/ThankYou";



function App() {
const [page, setPage] = useState(0);

  return (
    <>
    <Navbar setPage={setPage}/>
    {page === 0 ? <Main setPage= {setPage}/> : null}
    {page === 1 ? <Book setPage= {setPage}/> : null}
    {page === 2 ? <ThankYou /> : null}
    </>
  );
}

export default App;
