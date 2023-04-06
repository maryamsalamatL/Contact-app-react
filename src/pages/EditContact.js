import styles from "./EditContact.module.css";
import Form from "../components/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { editContact } from "../services/requestService";

const EditComponent = () => {
  const [editedContact, setEditedContact] = useState({ name: "", email: "" });
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setEditedContact(state.contact);
  }, []);

  const changeHandler = (e) => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!editedContact.name || !editedContact.email) {
      alert("please complete the form");
      return;
    }
    await editContact(editedContact.id, editedContact);
    navigate("/");
  };

  return (
    <section>
      <h3 className={styles.title}>Edit Contact</h3>
      <Form
        submitHandler={submitHandler}
        contact={editedContact}
        changeHandler={changeHandler}
      />
      <Link to="/">go back to contacts list</Link>
    </section>
  );
};

export default EditComponent;
