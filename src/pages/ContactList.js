import styles from "./ContactList.module.css";
import { getContacts, deleteContact } from "../services/requestService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import Search from "../components/Search";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  useEffect(() => {
    getContacts()
      .then(({ data }) => {
        setContacts(data);
        setAllContacts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    deleteContact(id)
      .then((res) => {
        const filteredContacts = contacts.filter((c) => c.id !== id);
        setContacts(filteredContacts);
        getContacts()
          .then(({ data }) => {
            setAllContacts(data);
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
      <Search allContacts={allContacts} setContacts={setContacts} />
      {contacts ? (
        contacts.map((c) => (
          <Contact
            contact={c}
            deleteHandler={deleteHandler}
            styles={styles}
            key={c.id}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContactList;
