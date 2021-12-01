import React from "react";
import { BrowserRouter as Router, Switch,Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routing from "./Route/route"

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
      
        {/* <Router>
          <Route exact path="/" component={ContactsList} />
          <Route exact path="/add" component={AddContact} />
          <Route path="/contacts/:id" component={Contact} />
        </Router> */}
     
      </div>
    </div>
  );

}

export default Routing;