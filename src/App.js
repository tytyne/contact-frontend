import React from "react";
// import { Switch, Route, Link,BrowserRouter } from "react-router-dom";
import { Routes ,Route,Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddContact from "./componets/AddContact";
import Contact from "./componets/Contact";
import ContactsList from "./componets/ContactList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/contacts" className="navbar-brand">
          Adress book
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
      
        <Routes>
          <Route exact path="/" element={<ContactsList />} />
          <Route exact path="/contacts" element={<ContactsList />} />
          {/* <Route path="/" element={<ContactsList />}></Route> */}
          <Route exact path="/add" element={<AddContact />} />
          <Route path="/contacts/:id" element={<Contact/>} />
        </Routes>
     
      </div>
    </div>
  );
}

export default App;