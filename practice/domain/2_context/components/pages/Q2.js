import { useReducer, useState } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import ContextQ2Form from "../atom/Q2/Form";
import ContextQ2Form3 from "../atom/Q2/Form3";
import { UseStore } from "../../../../store/3_context";

const ContextQ2Page = () => {
  /*
    문제 2 - 2
      1. Form1에서 값을 입력하면 userList에 데이터가 추가되도록 구현해보세요
      2. Form2에서 버튼을 클릭하면 userList의 각 요소인 객체에 isEdit: true의 속성이 추가되도록 구현해보세요
      3. Form3에서 reset 버튼을 클릭하면 userList를 초기화 시키도록 구현해보세요
      4. 제출 버튼을 누르면 isEdit true인 userList만 console.log로 출력해보세요
        (단, isEdit이 true인 데이터도 전역으로 관리해주세요.)
  */

  const [userList, setUserList] = useState([
    { id: 1, name: "홍길동", nickname: "히히" },
  ]);

  /*
    단, userList 상태 관리는 전역으로 관리하고 비즈니스 로직도 분리하기 위해
    useReducer, useContext를 사용하여 구현해보세요

    (일반 state를 사용하는 문제가 아니기 때문에 전역으로 상태관리를 할 수 있도록 해주세요)
    관련 로직은 src/store/3_context.js에 구현해주세요
  */
  //-----------------------------------------------------------]

  const reducer = (oldList, action) => {
    if (action.type === "ADD") {
      return [...oldList, action.payload];
    } else if (action.type === "EDIT") {
      return oldList.map((v) => ({ ...v, isEdit: "true" }));
    } else if (action.type === "RESET") {
      return oldList.filter((v) => v.id === 1);
    } else if (action.type === "SUBMIT") {
      return console.log(oldList.filter((v) => v.isEdit === "true"));
    }
    return;
  };

  const [listState, listDispatch] = useReducer(reducer, userList);
  console.log(listState);

  const handleSubmit = () => {
    listDispatch({
      type: "SUBMIT",
    });
  };
  //------------------------------------------------------------

  return (
    <>
      <UseStore.Provider value={{ listState, listDispatch }}>
        <h2>문제 2 - 2</h2>
        <ContextQ2Form />
        <ContextQ2Form3 />
        <div
          style={{
            marginTop: "32px",
          }}
        >
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
        <NavigateButton isLastPage />
      </UseStore.Provider>
    </>
  );
};
export default ContextQ2Page;
