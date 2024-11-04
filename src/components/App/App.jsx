import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import css from "../App/App.module.css";
// import ContactForm from "../ContactForm/ContactForm";
// import Contact from "../Contact";
// import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../contacts.json";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {/* <ContactForm />
      <SearchBox /> */}
      <ContactList contacts={contacts} />
    </div>
  );
}
