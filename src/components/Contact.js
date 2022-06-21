// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="container">
      <img src={props.data.photo} alt="Pas Foto"></img>
      <div className="biodata">
        <h1>{props.data.name}</h1>
        <p>{props.data.phone}</p>
        <p>{props.data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
