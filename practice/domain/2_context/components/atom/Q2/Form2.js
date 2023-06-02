import { useContext } from "react";
import { UseStore } from "../../../../../store/3_context";

const ContextQ2Form2 = () => {
  const { listDispatch } = useContext(UseStore);
  const handleAdd = (e) => {
    e.preventDefault();
    listDispatch({
      type: "EDIT",
    });
  };
  return (
    <div>
      <h1>Q2Form2</h1>
      <button onClick={handleAdd}>STATUS 추가</button>
    </div>
  );
};
export default ContextQ2Form2;
