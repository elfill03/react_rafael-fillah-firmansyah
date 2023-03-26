import React from "react";
import "./ButtonEdit.atom.style.css"
const ButtonEdit = ({onEdit}) => {
  return (
    <>
      <button className="Btn-edit" onClick={onEdit}>Edit</button>
    </>
  );
};

export default ButtonEdit;
