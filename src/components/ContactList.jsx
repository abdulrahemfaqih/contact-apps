import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
   return (
      <div className="flex flex-col gap-y-5">
         {
            contacts.map((contact) => (
               <ContactItem
                  key={contact.id}
                  id={contact.id}
                  onDelete={onDelete}
                  {...contact} />
            ))
         }
      </div>
   );
}

export default ContactList;
