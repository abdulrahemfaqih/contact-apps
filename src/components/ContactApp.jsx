import React from "react";
import ContactList from "./ContactList";
import ContactInput from "./ContactInput";
import { getData } from "../utils/data";


class ContactApp extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         contacts: getData(),
      };
      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onAddContactHandler = this.onAddContactHandler.bind(this);
   }

   onDeleteHandler(id) {
      const contacts = this.state.contacts.filter(
         (contact) => contact.id !== id
      );
      this.setState({ contacts });
   }

   onAddContactHandler(name, tag) {
      this.setState((prevState) => {
         return {
            contacts: [
               ...prevState.contacts,
               {
                  id: +new Date(),
                  name,
                  tag,
                  imageUrl: "./images/default.jpg",
               },
            ],
         };
      });
   }

   render() {
      return (
         <div className="container mx-auto max-w-2xl">
            <h1 className="font-bold text-2xl text-center my-4">
               Daftar Kontak
            </h1>
            <h2 className="font-semibold text-lg">Tambah Kontak</h2>
            <ContactInput addContact={this.onAddContactHandler} />
            <ContactList
               contacts={this.state.contacts}
               onDelete={this.onDeleteHandler}
            />
         </div>
      );
   }
}

// function ContactApp() {
//    const contacts = getData();

//    return (
//       <div className="container mx-auto max-w-2xl">
//          <h1 className="font-bold text-2xl text-center my-4">Daftar Kontak</h1>
//          <ContactList contacts={contacts} />
//       </div>
//    );
// }

export default ContactApp;
