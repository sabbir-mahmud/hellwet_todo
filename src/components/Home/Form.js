import React from "react";
import { toast } from "react-toastify";
import { useCreateTaskMutation } from "../../app/endpoints/todoEndPoints";
import useUser from "../../hooks/useUser";

const Form = () => {
  const { user, loading } = useUser();
  const [createTask, resInfo] = useCreateTaskMutation();

  if (loading) {
    return;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: user?.email,
      title: e.target.title.value,
      description: e.target.description.value,
      dueDate: e.target.dueDate.value,
    };
    console.log(body);
    createTask(body);
    e.target.reset();
  };

  if (resInfo?.status === "fulfilled") {
    toast.info("Task Created!");
  }
  return (
    <div className="my-3">
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="date"
          placeholder="due date"
          name="dueDate"
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
