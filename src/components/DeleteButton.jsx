import React from "react";

function DeleteButton({ id, onDelete }) {
    return <button className="py-1 px-2 text-red-500 border rounded-md hover:bg-red-500 hover:text-white" onClick={() => onDelete(id)}>x</button>
}

export default DeleteButton