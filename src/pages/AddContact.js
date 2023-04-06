import styles from "./AddContact.module.css";
import { useState } from "react";
import { postContact } from "../services/requestService";
import { useNavigate, Link } from "react-router-dom";
import Form from "../components/Form";

const AddContact = () => {
  const [newContact, setNewContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const addNewContactHandler = (newContact) => {
    postContact(newContact)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!newContact.name || !newContact.email) {
      alert("please complete the form");
    } else {
      addNewContactHandler(newContact);
      setNewContact({ name: "", email: "" });
      navigate("/");
    }
  };
  return (
    <section>
      <h3 className={styles.title}>Add Contact</h3>
      <Form
        contact={newContact}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
      <Link to="/">go back to contacts list</Link>
    </section>
  );
};

export default AddContact;
