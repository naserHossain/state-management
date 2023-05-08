import React, { useState } from "react";
import Table from "./components/table-app/table";
import ContactForm from "./components/contact-app/ContactForm";

const App = () => {
    const [contacts, setContacts] = useState([]);
    const getContact = (contact) => {
        setContacts([].concat(contacts, contact));
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <ContactForm getContact={getContact} />
            <Table contacts={contacts} />
        </div>
    );
};

export default App;
