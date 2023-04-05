import styles from "./ContactList.module.css";
import { getContacts, deleteContact } from "../services/requestService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    console.log("cdm");
    getContacts()
      .then(({ data }) => setContacts(data))
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    deleteContact(id)
      .then((res) => {
        getContacts()
          .then(({ data }) => {
            setContacts(data);
            localStorage.setItem("contacts", JSON.stringify(data));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.contactList}>
      <div className={styles.topSec}>
        <h2>Contact List</h2>
        <button className={styles.addBtn}>
          <Link to="/add-contact" className={styles.link}>
            Add
          </Link>
        </button>
      </div>
      {contacts.map((c) => (
        <Contact contact={c} deleteHandler={deleteHandler} styles={styles} />
      ))}
    </div>
  );
};

export default ContactList;
