import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiFillFileImage } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo, uploadPhoto }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <AiFillFileImage className="icon" onClick={uploadPhoto} />
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
