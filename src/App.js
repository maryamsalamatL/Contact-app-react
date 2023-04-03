import "./App.css";
import Layout from "./layout/Layout";
import { useState, useEffect } from "react";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";
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

  return (
    <div className="App">
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </Layout>
      {/* <Header />
      <AddContact addNewContactHandler={addNewContactHandler} />
      <ContactList onDelete={deleteHandler} contacts={contacts} /> */}
    </div>
  );
}

export default App;
