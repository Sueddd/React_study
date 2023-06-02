import { useContext } from "react";
import { UseStore } from "../../../../../store/3_context";

const ContextQ2Form3 = () => {
  const { listDispatch } = useContext(UseStore);

  const handleReset = () => {
    listDispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <h1>Q2Form3</h1>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};
export default ContextQ2Form3;
