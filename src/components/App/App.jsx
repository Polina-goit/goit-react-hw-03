import { useState, useEffect } from "react";
import "modern-normalize/modern-normalize.css";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import css from "../App/App.module.css";
import ContactForm from "../ContactForm/ContactForm";
// import Contact from "../Contact";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../contacts.json";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("initialContacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");
  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}
