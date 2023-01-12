import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./components/Input";
import Todos from "./components/Todos";
import { getData } from "./redux/actions/fetchAction";

const App = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.fetch);
console.log(data);
  useEffect(() => {
    dispatch(getData());
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return error;

  return (
    <div>
      {data &&
        data.map((a) => {
          <h5>{a.companyname}</h5>;
        })}
      <Input />
      <Todos />
    </div>
  );
};
export default App;
