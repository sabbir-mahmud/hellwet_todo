import React from "react";
import {
  BsFileEarmarkText,
  BsFillTrash3Fill,
  BsMouse,
  BsPencilFill,
} from "react-icons/bs";

const Task = ({ task }) => {
  return (
    <tr>
      <th>{task?.title}</th>
      <td>{task?.description}</td>
      <td>{task?.dueDate ? task?.dueDate : "due date"}</td>
      <td>{task?.status ? "Completed" : "Not Completed"}</td>
      <td>
        <button className="mr-5">
          <BsMouse />
        </button>
        <button>
          <BsFileEarmarkText />
        </button>
        <button className="mx-5">
          <BsPencilFill />
        </button>
        <button>
          <BsFillTrash3Fill />
        </button>
      </td>
    </tr>
  );
};

export default Task;
