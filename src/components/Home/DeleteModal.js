import React from "react";
import { toast } from "react-toastify";
import { useDeleteTaskMutation } from "../../app/endpoints/todoEndPoints";

const DeleteModal = ({ id, setId }) => {
  const [deleteTask, delInfo] = useDeleteTaskMutation();
  const handleDelete = () => {
    console.log(id);
    deleteTask(id);
  };
  if (delInfo?.status === "fulfilled") {
    toast.error("Task Deleted!");
  }
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure!</h3>
          <p className="py-4">you want to delete this?</p>
          <div className="modal-action">
            <label
              htmlFor="delete-modal"
              onClick={() => setId(null)}
              className="btn"
            >
              no
            </label>
            <label
              htmlFor="delete-modal"
              onClick={() => handleDelete()}
              className="btn"
            >
              yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
