import { FaUserCircle, FaTrashAlt } from "react-icons/fa";
import styles from "./ContactList.module.css";
import { getContacts, deleteContact } from "../services/requestService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <div key={c.id} className={styles.contact}>
          <span className={styles.contactIcon}>
            <FaUserCircle />
          </span>
          <div className={styles.info}>
            <p className={styles.name}>{c.name}</p>
            <span className={styles.email}>{c.email}</span>
          </div>
          <div
            className={styles.removeIcon}
            onClick={() => deleteHandler(c.id)}
          >
            <FaTrashAlt />
          </div>
          <Link to={`contact/${c.id}`}>edit</Link>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
