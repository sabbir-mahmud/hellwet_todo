import React, { useState } from "react";
import { toast } from "react-toastify";
import { useUpdateTaskMutation } from "../../app/endpoints/todoEndPoints";

const UpdateTask = ({ task, setUpdate }) => {
  const [status, setStatus] = useState(task.status);
  const [updateTask, updateInfo] = useUpdateTaskMutation();
  let date;
  if (task?.dueDate) {
    date = task?.dueDate;
  } else {
    date = Date();
  }
  const defaultDate = new Date(date).toISOString().slice(0, 10);

  const handleUpdate = (e) => {
    e.preventDefault();
    const body = {
      email: task.email,
      title: e.target.title.value,
      description: e.target.description.value,
      status: status,
      dueDate: e.target.dueDate.value,
    };
    const data = {
      id: task._id,
      body,
    };
    updateTask(data);
  };
  if (updateInfo.status === "fulfilled") {
    toast.info("Updated");
    setUpdate(null);
  }

  return (
    <div>
      <div>
        <input type="checkbox" id="update-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <label
              onClick={() => setUpdate(null)}
              htmlFor="update-modal"
              className="btn btn-sm btn-circle absolute right-3 top-3"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">Update Task</h3>
            <form onSubmit={handleUpdate} className="flex flex-col">
              <input
                type="text"
                placeholder="title"
                defaultValue={task?.title}
                name="title"
                className="input input-bordered w-full max-w-xs my-1"
              />
              <input
                type="text"
                placeholder="description"
                name="description"
                defaultValue={task?.description}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="date"
                placeholder="due date"
                name="dueDate"
                defaultValue={defaultDate}
                className="input input-bordered w-full max-w-xs my-1"
              />

              <label className="my-2 cursor-pointer flex ">
                <span>mark as done</span>
                <input
                  type="checkbox"
                  className="toggle ml-3"
                  checked={status}
                  onClick={() => setStatus(!status)}
                />
              </label>
              <button type="submit" className="btn btn-primary w-32 mt-2">
                update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
