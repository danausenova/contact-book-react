import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [nameVal, setNameVal] = useState("");
  const [surnameVal, setSurnameVal] = useState("");
  const [numberVal, setNumberVal] = useState("");

  return (
    <div className="addContact">
      <form
        className="addForm"
        onSubmit={(e) => {
          e.preventDefault();
          if (!nameVal.trim() || !surnameVal.trim() || !numberVal.trim()) {
            return;
          }
          const newContact = {
            id: Date.now(),
            name: nameVal,
            surname: surnameVal,
            number: numberVal,
            completed: false,
          };
          addContact(newContact);
          setNameVal("");
          setSurnameVal("");
          setNumberVal("");
        }}
      >
        <input
          value={nameVal}
          onChange={(e) => {
            setNameVal(e.target.value);
          }}
          type="text"
          className="nameInp"
          placeholder="Enter first name"
        />
        <input
          value={surnameVal}
          onChange={(e) => {
            setSurnameVal(e.target.value);
          }}
          type="text"
          className="surnameInp"
          placeholder="Enter surname"
        />
        <input
          value={numberVal}
          onChange={(e) => {
            setNumberVal(e.target.value);
          }}
          type="text"
          className="phoneInp"
          placeholder="Enter phone number"
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default ContactForm;
