import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";
import NotFound from "./components/NotFound";
import EditContact from "./pages/EditContact";

const routes = [
  { path: "/", element: <ContactList /> },
  { path: "/add-contact", element: <AddContact /> },
  { path: "/contact/:id", element: <EditContact /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
