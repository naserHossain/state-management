import React, { useState } from "react";

const contact_form_init = {
    name: "",
    email: "",
    group: "",
};
const ContactForm = ({ getContact }) => {
    const [values, setValues] = useState({ ...contact_form_init });
    const { name, email, group } = values;

    // handle input change. replacing by own data
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    // input button handle
    const handleButton = (e) => {
        e.preventDefault();
        getContact(values);
        setValues({
            ...contact_form_init,
        });
    };

    return (
        <form onSubmit={handleButton}>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="name">Email: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="group">Group: </label>
                <select
                    name="group"
                    id="group"
                    value={group}
                    onChange={handleInputChange}
                >
                    <option value="">Select</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                </select>
            </div>
            <br />
            <input type="submit" value={"create new contact"} />
        </form>
    );
};
export default ContactForm;
