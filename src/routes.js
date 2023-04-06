import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";
import NotFound from "./components/NotFound";
import ContactDetail from "./pages/ContactDetail";
import EditComponent from "./pages/EditContact";

const routes = [
  { path: "/", element: <ContactList /> },
  { path: "/add-contact", element: <AddContact /> },
  { path: "/user/:id", element: <ContactDetail /> },
  { path: "/edit/:id", element: <EditComponent /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
