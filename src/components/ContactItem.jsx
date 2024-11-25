import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

function ContactItem({ imageUrl, name, tag }) {
   return (
      <div className="flex p-4 items-center border-2 rounded-lg">
         <div className="flex gap-x-4 items-center">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
         </div>
      </div>
   );
}

export default ContactItem;
