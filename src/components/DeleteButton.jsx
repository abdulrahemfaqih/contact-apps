import React from "react";

function DeleteButton({ id, onDelete }) {
    return <button className="py-1 px-2 text-red-500 border rounded-md" onClick={() => onDelete(id)}>x</button>
}

export default DeleteButton