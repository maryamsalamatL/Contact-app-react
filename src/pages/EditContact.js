import { useParams } from "react-router-dom";
import { getContacts } from "../services/requestService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContacts()
      .then(({ data }) => setContacts(data))
      .catch((err) => console.log(err));
  }, []);
  const { id } = useParams();
  const findedContact = contacts !== [] && contacts.find((c) => c.id == id);

  return (
    <>
      {findedContact && (
        <>
          <div>{findedContact.name}</div>
          <div>{findedContact.email}</div>
          <Link to="/">go back to contacts list</Link>
        </>
      )}
    </>
  );
};

export default EditContact;
