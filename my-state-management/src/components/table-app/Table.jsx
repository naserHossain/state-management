import { useState } from "react";

const Table = ({ contacts }) => {
    const [filter, setFilter] = useState("All");

    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    const [searchTerm, setSearchTerm] = useState("");

    let filteredContacts = [];
    if (filter === "All") {
        filteredContacts = contacts;
    } else {
        filteredContacts = contacts.filter(
            (contact) => contact.group === filter
        );
    }

    if (searchTerm) {
        filteredContacts = filteredContacts.filter(
            (contact) =>
                contact.name.includes(searchTerm) ||
                contact.email.includes(searchTerm)
        );
    }

    return (
        <>
            <div>
                Filters:
                <select value={filter} onChange={handleChange}>
                    <option value="All">All</option>
                    <option value="">None</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                </select>
                <input
                    type="search"
                    placeholder="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name: </th>
                        <th>Email: </th>
                        <th>Group: </th>
                    </tr>
                </thead>

                <tbody>
                    {filteredContacts.map((contact, index) => (
                        <tr key={index}>
                            <td> {contact.name} </td>
                            <td> {contact.email}</td>
                            <td> {contact.group}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default Table;
