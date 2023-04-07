import http from "./httpService";

const getContacts = () => {
  return http.get("/contacts");
};
const getOneContact = (id) => {
  return http.get(`/contacts/${id}`);
};
const postContact = (data) => {
  return http.post("/contacts", data);
};
const deleteContact = (id) => {
  return http.delete(`/contacts/${id}`);
};
const editContact = (id, data) => {
  return http.put(`/contacts/${id}`, data);
};
export { getContacts, postContact, deleteContact, editContact, getOneContact };
