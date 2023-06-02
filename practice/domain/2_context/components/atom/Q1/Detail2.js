import { useContext } from "react";
import { UserStore } from "../../../../../store/2_context";

const ContextQ1Detail2 = () => {
  const { isModalOpen, setIsModalOpen } = useContext(UserStore);

  const handleDetail2 = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={handleDetail2}>보이기</button>
    </>
  );
};
export default ContextQ1Detail2;
