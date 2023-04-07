import { Link, useLocation } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import styles from "./ContactDetail.module.css";

const ContactDetail = () => {
  const { state } = useLocation();

  return (
    <>
      <section className={styles.section}>
        <h2>Contact Detail</h2>
        <div className={styles.detail}>
          <p>name : {state.contact.name}</p>
          <p>
            email : <span className={styles.email}>{state.contact.email}</span>
          </p>
        </div>
        <Link to="/" className={styles.link}>
          <FaArrowAltCircleLeft />
          <p>go back to contacts list</p>
        </Link>
      </section>
    </>
  );
};

export default ContactDetail;
