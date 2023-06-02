import { useContext } from "react";
import ContextQ1Detail2 from "./Detail2";
import { UserStore } from "../../../../../store/2_context";

const ContextQ1Detail = () => {
  const { isModalOpen, setIsModalOpen } = useContext(UserStore);

  const handleDetail1 = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button onClick={handleDetail1}>보이기</button>
      <ContextQ1Detail2 />
    </>
  );
};
export default ContextQ1Detail;
