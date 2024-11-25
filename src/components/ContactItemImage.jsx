import React from "react";

function ContactItemImage({ imageUrl }) {
   return (
      <div>
         <img className="rounded-full h-20" src={imageUrl} alt="contact avatar" />
      </div>
   );
}

export default ContactItemImage;
