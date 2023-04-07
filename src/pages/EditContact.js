import styles from "./EditContact.module.css";
import Form from "../components/Form";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { editContact, getOneContact } from "../services/requestService";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const EditComponent = () => {
  const [editedContact, setEditedContact] = useState({ name: "", email: "" });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneContact(id)
      .then(({ data }) => setEditedContact(data))
      .catch();
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
    <section className={styles.section}>
      <h3 className={styles.title}>Edit Contact</h3>
      <Form
        submitHandler={submitHandler}
        contact={editedContact}
        changeHandler={changeHandler}
        btn="Edit"
      />
      <Link to="/" className={styles.link}>
        <FaArrowAltCircleLeft />
        <p>go back to contacts list</p>
      </Link>
    </section>
  );
};

export default EditComponent;
