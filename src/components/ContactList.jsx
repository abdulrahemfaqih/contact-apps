import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
   return (
      <div className="flex flex-col gap-y-5">
         {
            contacts.map((contact) => (
            <ContactItem key={contact.id} {...contact} />
            ))
         }
      </div>
   );
}

export default ContactList;
