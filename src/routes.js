import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";
import NotFound from "./components/NotFound";
import ContactDetail from "./pages/ContactDetail";

const routes = [
  { path: "/", element: <ContactList /> },
  { path: "/add-contact", element: <AddContact /> },
  { path: "/user/:id", element: <ContactDetail /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
