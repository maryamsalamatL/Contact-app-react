import styles from "./AddContact.module.css";
import { useState } from "react";
import { postContact } from "../services/requestService";
import { useNavigate, Link } from "react-router-dom";
import Form from "../components/Form";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const AddContact = () => {
  const [newContact, setNewContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!newContact.name || !newContact.email) {
      alert("please complete the form");
      return;
    }
    await postContact(newContact);
    setNewContact({ name: "", email: "" });
    navigate("/");
  };
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Add Contact</h3>
      <Form
        contact={newContact}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        btn="Add"
      />
      <Link to="/" className={styles.link}>
        <FaArrowAltCircleLeft />
        <p>go back to contacts list</p>
      </Link>
    </section>
  );
};

export default AddContact;
