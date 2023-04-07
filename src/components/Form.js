import styles from "./Form.module.css";

const Form = ({ submitHandler, changeHandler, contact, btn }) => {
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.formControl}>
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          placeholder="name"
          onChange={changeHandler}
          name="name"
          value={contact.name}
        ></input>
      </div>
      <div className={styles.formControl}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          placeholder="email"
          onChange={(e) => changeHandler(e)}
          name="email"
          value={contact.email}
          type="email"
        ></input>
      </div>
      <button className={styles.addBtn} type="submit">
        {btn}
      </button>
    </form>
  );
};

export default Form;
