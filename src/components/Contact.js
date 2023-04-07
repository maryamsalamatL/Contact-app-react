import { FaUserCircle, FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Contact = ({ contact, deleteHandler, styles }) => {
  const navigate = useNavigate();
  const { id, name, email } = contact;
  return (
    <div key={id} className={styles.contact}>
      <span className={styles.contactIcon}>
        <FaUserCircle />
      </span>
      <div
        className={styles.info}
        onClick={() => navigate(`user/${id}`, { state: { contact } })}
      >
        <p className={styles.name}>{name}</p>
        <span className={styles.email}>{email}</span>
      </div>
      <div className={styles.iconController}>
        <div
          className={`${styles.icons} ${styles.removeIcon}`}
          onClick={() => deleteHandler(id)}
        >
          <FaTrashAlt />
        </div>
        <div
          className={`${styles.icons} ${styles.editIcon}`}
          onClick={() => navigate(`edit/${id}`, { state: { contact } })}
        >
          <FaEdit />
        </div>
      </div>
    </div>
  );
};

export default Contact;
