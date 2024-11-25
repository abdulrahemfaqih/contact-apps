import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";

function ContactApp() {
   const contacts = getData();

   return (
      <div className="container mx-auto max-w-2xl">
         <h1 className="font-bold text-2xl text-center my-4">Daftar Kontak</h1>
         <ContactList contacts={contacts} />
      </div>
   );
}

export default ContactApp;
