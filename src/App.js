import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  function addContact(newContact) {
    setContacts([...contacts, newContact]);
  }
  function deleteContact(id) {
    const newArr = contacts.filter((item) => item.id !== id);
    setContacts(newArr);
  }
  function checked(id) {
    const newArr = contacts.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    // сортировка по любимым контактам, т.е. любимые контакты поднимаются наверх
    const sortedArr = newArr.sort((a, b) => b.completed - a.completed);
    setContacts(sortedArr);
  }
  return (
    <div className="App">
      <h1>My contact book</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        checked={checked}
      />
    </div>
  );
}

export default App;
