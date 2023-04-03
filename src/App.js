import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";
import {
  getContacts,
  postContact,
  deleteContact,
} from "./services/requestService";

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    console.log("cdm");
    getContacts()
      .then(({ data }) => {
        setContacts(data);
      })
      .catch((err) => {});
  }, []);

  const addNewContactHandler = (newContact) => {
    postContact(newContact)
      .then((res) => {
        getContacts()
          .then((res) => {
            setContacts(res.data);
            localStorage.setItem("contacts", JSON.stringify(res.data));
          })

          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  const deleteHandler = (id) => {
    deleteContact(id)
      .then((res) => {
        getContacts()
          .then(({ data }) => {
            setContacts(data);
            localStorage.setItem("contacts", JSON.stringify(data));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Header />
      <AddContact addNewContactHandler={addNewContactHandler} />
      <ContactList onDelete={deleteHandler} contacts={contacts} />
    </div>
  );
}

export default App;
