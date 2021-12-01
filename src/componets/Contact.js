import React, { useState, useEffect } from "react";
import ContactService from "../services/ContactService";

const Contact = props => {
  const initialContactState = {
    id: null,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    
  };
  const [currentContact, setCurrentContact] = useState(initialContactState);
  const [message, setMessage] = useState("");

  const getContact = id => {
    ContactService.get(id)
      .then(response => {
        setCurrentContact(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getContact(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentContact({ ...currentContact, [name]: value });
  };


  const updateContact = () => {
    ContactService.update(currentContact,currentContact.id)
      .then(response => {
        console.log(response.data);
        setMessage("The contact was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteContact = () => {
    ContactService.deleteContact(currentContact.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/contacts");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentContact ? (
        <div className="edit-form">
          <h4>Contacts</h4>
          <form>
            <div className="form-group">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={currentContact.firstname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={currentContact.lastname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={currentContact.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={currentContact.phone}
                onChange={handleInputChange}
              />
            </div>

          </form>

         

          <button className="badge badge-danger mr-2" onClick={deleteContact}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContact}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Contact...</p>
        </div>
      )}
    </div>
  );
};

export default Contact;