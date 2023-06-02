import { useContext, useState } from "react";
import ContextQ2Form2 from "./Form2";
import { UseStore } from "../../../../../store/3_context";

const ContextQ2Form = () => {
  const [name, setName] = useState();
  const [nickname, setNickname] = useState();
  const id = 2;
  const handleName = (e) => {
    setName(e.target.value);
    return;
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
    return;
  };

  const { listDispatch } = useContext(UseStore);

  const handleAdd = (e) => {
    e.preventDefault();
    listDispatch({
      type: "ADD",
      payload: { name, nickname },
    });
  };

  return (
    <div>
      <h1>Q2Form</h1>
      <input placeholder="name" onChange={handleName} />
      <input placeholder="nick-name" onChange={handleNickname} />
      <button onClick={handleAdd}>추가</button>

      <ContextQ2Form2 />
    </div>
  );
};
export default ContextQ2Form;
