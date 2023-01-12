export const add = (todo) => {
  return {
    type: "ADD",
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE",
    is: id,
  };
};
export const completedTodo=(id)=>{
    return{
        type :"COMPLETE",
        id:id
    }
   
}