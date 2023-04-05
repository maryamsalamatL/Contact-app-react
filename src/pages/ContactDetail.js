import { Link, useLocation } from "react-router-dom";

const ContactDetail = () => {
  const { state } = useLocation();

  return (
    <>
      <div>{state.contact.name}</div>
      <div>{state.contact.email}</div>
      <Link to="/">go back to contacts list</Link>
    </>
  );
};

export default ContactDetail;
