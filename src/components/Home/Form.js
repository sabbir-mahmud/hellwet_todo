import React from "react";

const Form = () => {
  return (
    <div className="my-3">
      <form className="flex justify-between">
        <input
          type="text"
          placeholder="title"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="description"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="date"
          placeholder="due date"
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
