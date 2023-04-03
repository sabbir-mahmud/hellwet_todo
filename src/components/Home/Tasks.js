import React from "react";
import { useGetTasksQuery } from "../../app/endpoints/todoEndPoints";
import useUser from "../../hooks/useUser";
import Task from "./Task";

const Tasks = () => {
  const { user, loading } = useUser();
  const { data: tasks, isLoading } = useGetTasksQuery(user.email);

  if (loading || isLoading) {
    return;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table  table-zebra w-full">
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
            <th>due date</th>
            <th>completed</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
