import { format } from "date-fns";
import React, { useState } from "react";
import { BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";
import DeleteModal from "./DeleteModal";
import UpdateTask from "./UpdateTask";

const Task = ({ task }) => {
  const [update, setUpdate] = useState(null);
  const [id, setId] = useState(null);
  const storedDate = new Date(task.dueDate).toISOString().slice(0, 10);
  const date = format(new Date(storedDate), "MM/dd/yyyy");

  return (
    <tr>
      <th>{task?.title}</th>
      <td>{task?.description}</td>
      <td>{task?.dueDate ? date : "due date"}</td>
      <td>{task?.status ? "Completed" : "Not Completed"}</td>
      <td>
        <label
          htmlFor="update-modal"
          onClick={() => setUpdate(task)}
          className="btn btn-ghost"
        >
          <BsPencilFill />
        </label>

        <label
          htmlFor="delete-modal"
          onClick={() => setId(task._id)}
          className="btn btn-ghost"
        >
          <BsFillTrash3Fill />
        </label>

        {/* update modal */}
        {update && <UpdateTask task={update} setUpdate={setUpdate} />}

        {/* Delete Modal */}
        {id && <DeleteModal id={id} setId={setId} />}
      </td>
    </tr>
  );
};

export default Task;
