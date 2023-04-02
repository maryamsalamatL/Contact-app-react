import http from "./httpService";

const getContacts = () => {
  return http.get("/contacts");
};
const postContact = (contact) => {
  return http.post("/contacts", contact);
};
const deleteContact = (id) => {
  return http.delete(`/contacts/${id}`);
};
export { getContacts, postContact, deleteContact };
