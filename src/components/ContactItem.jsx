import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";

function ContactItem({ imageUrl, name, tag,id,  onDelete }) {
   return (
      <div className="p-4 order-2 rounded-lg border-2 border-dashed">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
               <ContactItemImage imageUrl={imageUrl} />
               <ContactItemBody name={name} tag={tag} />
            </div>
            <DeleteButton id={id} onDelete={onDelete} />
         </div>
      </div>
   );
}

export default ContactItem;
