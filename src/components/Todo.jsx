import React from "react";
import { useDispatch } from "react-redux";
import { completedTodo, deleteTodo } from "../redux/actions/taskAction";

const Todo = ({ title, isCompleted,id }) => {
  const dispatch=useDispatch()
  return (
    <>
    {isCompleted ?<h5>Done</h5>:<h5>notDone</h5>}
      
      <li>
        <h3>{title}</h3>
        <button onClick={()=>dispatch(deleteTodo(id))}>Delete</button>
        <button onClick={()=>dispatch(completedTodo(id))}>Complete</button>


      </li>
    </>
  );
};

export default Todo;
