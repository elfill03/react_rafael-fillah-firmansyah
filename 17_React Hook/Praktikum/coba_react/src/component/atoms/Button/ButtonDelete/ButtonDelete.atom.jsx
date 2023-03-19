import React from "react";
import "./ButtonDelete.atom.style.css"
const ButtonDelete = ({onDelete}) => {
  return (
    <>
      <button className="Btn-delete" onClick={onDelete}>Delete</button>
    </>
  );
};

export default ButtonDelete;
