import { FaUserCircle, FaTrashAlt } from "react-icons/fa";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.contactList}>
      {contacts.map((c) => (
        <div key={c.id} className={styles.contact}>
          <span className={styles.contactIcon}>
            <FaUserCircle />
          </span>
          <div className={styles.info}>
            <p className={styles.name}>{c.name}</p>
            <span className={styles.email}>{c.email}</span>
          </div>
          <div className={styles.removeIcon} onClick={() => onDelete(c.id)}>
            <FaTrashAlt />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
