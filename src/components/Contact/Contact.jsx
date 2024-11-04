// import React from "react";
import css from "../Contact/Contact.module.css";
import { HiUser } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
const Contact = ({ name, number }) => {
  return (
    <>
      <div>
        <p>
          <HiUser />
          {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.button}>Delete</button>
    </>
  );
};

export default Contact;
