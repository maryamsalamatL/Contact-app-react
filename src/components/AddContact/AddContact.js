import styles from "./AddContact.module.css";
import { useState } from "react";

const AddContact = ({ addNewContactHandler }) => {
  const [newContact, setNewContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
    console.log(newContact);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!newContact.name || !newContact.email) {
      alert("please complete the form");
    } else {
      addNewContactHandler(newContact);
      setNewContact({ name: "", email: "" });
    }
  };
  return (
    <section>
      <h3 className={styles.title}>Add Contact</h3>
      <form onSubmit={submitHandler}>
        <div className={styles.formControl}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            placeholder="name"
            onChange={changeHandler}
            name="name"
            value={newContact.name}
          ></input>
        </div>
        <div className={styles.formControl}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            placeholder="email"
            onChange={(e) => changeHandler(e)}
            name="email"
            value={newContact.email}
            type="email"
          ></input>
        </div>
        <button className={styles.addBtn} type="submit">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddContact;
