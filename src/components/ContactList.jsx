import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, deleteContact, checked }) => {
  return (
    <div>
      <h3>My contacts</h3>
      {contacts.map((item) => (
        <Contact item={item} deleteContact={deleteContact} checked={checked} />
      ))}
    </div>
  );
};

export default ContactList;
