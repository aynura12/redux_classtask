import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/actions/taskAction";

const Input = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const addTask = (e) => {
    e.preventDefault();
    dispatch(
      add({
        id: Date.now(),
        title: inputRef.current.value,
        isCompleted: false,
      })
    );
    inputRef.current.value="";
  };
  
  return (
    <form onSubmit={addTask}>
      <input type="text" ref={inputRef}></input>
    </form>
  );
};

export default Input;
