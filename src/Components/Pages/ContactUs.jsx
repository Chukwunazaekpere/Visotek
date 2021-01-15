import React, { useState } from "react";
import "../Styles/ContactStyles.css";


const ContactUs = () => {
    const formFields = ["Firstname", "Lastname", "Email", "Message"]
    const [contactFormFields, setContactFormFields] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Message: ""
    })
    
    const handleFormChange = (event) => {
        let fieldValue = event.target.value
        const fieldName = event.target.name
        let contactForm = contactFormFields
        contactForm[fieldName] = fieldValue
        setContactFormFields({...contactForm})
        console.log(contactFormFields)
    }
    return(
        <div className="contact-container">
            {
                formFields.map(field => (
                    <ul key={field}>
                        <label>{field}:</label>
                        <li>
                            {
                                field !== "Message" ?
                                    <input className="form-control"
                                        type={field === "Email" ? "email" : "text"}
                                        name={field} 
                                        onChange={event => handleFormChange(event)}
                                        placeholder={field === "Email" ? "Your email address"
                                                    : ''}
                                        value={contactFormFields[field]}
                                    />
                                 :
                                 <textarea className="form-control"
                                    name={field} cols="30" rows="10"
                                    value={contactFormFields[field]}
                                    placeholder="Enter your message."
                                    onChange={event => handleFormChange(event)}
                                />
                            }
                           
                        </li>

                    </ul>
                ))
            }
             <button className="btn btn-info mb-3 ml-5" 
                            type="submit">Send message to Visotek</button>
        </div>
    )
}

export default ContactUs;