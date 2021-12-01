import React, { useState, useEffect } from "react";
import ContactService from "../services/ContactService";
import { Link } from "react-router-dom";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    retrieveContacts();
  }, []);

  const onChangeSearchInput = e => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
  };

  const retrieveContacts = () => {
    ContactService.getAllContacts()
      .then(response => {
        setContacts(response.data);
        console.log("check contacts",response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveContacts();
    setCurrentContact(null);
    setCurrentIndex(-1);
  };

  const setActiveContact = (contact, index) => {
    setCurrentContact(contact);
    setCurrentIndex(index);
  };



  const findByInput = () => {
    ContactService.searchContact(searchInput)
      .then(response => {
        setContacts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by input"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByInput}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Address book</h4>

        <ul className="list-group">
          {contacts &&
            contacts.map((contact, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveContact(contact, index)}
                key={index}
              >
                {contact.firstname}
              </li>
            ))}
        </ul>

      
      </div>
      <div className="col-md-6">
        {currentContact ? (
          <div>
            <h4>Contact</h4>
            <div>
              <label>
                <strong>Firstname:</strong>
              </label>{" "}
              {currentContact.firstname}
            </div>
            <div>
              <label>
                <strong>Lastaname:</strong>
              </label>{" "}
              {currentContact.lastname}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentContact.email}
            </div>
            <div>
              <label>
                <strong>Phone:</strong>
              </label>{" "}
              {currentContact.phone}
            </div>

            <Link
              to={"/contacts/" + currentContact.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          
            {/* <button>Edit </button> */}
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Contact...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsList;
