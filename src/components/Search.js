import styles from "./Search.module.css";
import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ allContacts, setContacts }) => {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    const value = e.target.value;
    if (value !== "") {
      const filteredContacts = allContacts.filter((c) =>
        Object.values(c).join(" ").toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  };

  return (
    <div className={styles.formController}>
      <form>
        <FaSearch className={styles.icon} />
        <input
          type="search"
          onChange={(e) => changeHandler(e)}
          value={inputValue}
          ref={ref}
        />
      </form>
    </div>
  );
};

export default Search;
