import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const tasks = useSelector((state) => state.task);
  console.log(tasks);
  return (
    <div>
      <ul>
        {tasks.map((t) => (
          <Todo key={t.id} title={t.title} isCompleted={t.isCompleted} id={t.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
