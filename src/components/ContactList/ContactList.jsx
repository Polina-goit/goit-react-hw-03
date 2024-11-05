import Contact from "../Contact/Contact";
import "../../contacts.json";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => onDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
