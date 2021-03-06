import React, { useState } from "react";
import ContactService from "../services/ContactService";

const AddContact = () => {
  const initialContactState = {
    id: null,
    firstname: "",
    lastname: "",
    email:"",
    phone:""
  };
  const [contact, setContact] = useState(initialContactState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const saveContact = () => {
   
   
    let emails = contact.email.split(",")
    let phones = contact.phone.split(",")
    let emptyArrEmail = []
    for(let i = 0;  i<emails.length; i++) {
    emptyArrEmail.push(emails[i])
    }
    let emptyArrPhone = []
    for(let i = 0;  i<phones.length; i++) {
    emptyArrPhone.push(phones[i])
    }
    // console.log("check array",emptyArrEmail)
    // console.log("check array",emptyArrPhone)
    var data = {
      firstname: contact.firstname,
      lastname: contact.lastname,
      email:emptyArrEmail,
      phone: emptyArrPhone
    };
    console.log("check data",data.phone)

    ContactService.insertContact(data)
      .then(response => {
        console.log("check thisss",response)
        setContact({
          id: response.data.id,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          phone: response.data.phone
        });
        setSubmitted(true);
        console.log("check responseee",response.data.firstname);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newContact = () => {
    setContact(initialContactState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newContact}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              required
              value={contact.firstname}
              onChange={handleInputChange}
              name="firstname"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              required
              value={contact.lastname}
              onChange={handleInputChange}
              name="lastname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={contact.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              required
              value={contact.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>

          <button onClick={saveContact} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddContact;