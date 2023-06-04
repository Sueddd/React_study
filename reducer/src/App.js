import "./App.css";
import React, { useReducer, useState } from "react";

// reducer을 사용하면 사용자는 주문만 넣고(action)
// 전문적으로 처리해주는 함수(reducer)가 계산을 해주는 것이다.

export default function App() {
  const [number, setNumber] = useState(1);
  // useReducer를 이용할 때 첫번째 파라미터로 올 reducer 함수
  // oldCount == 이전의 카운트, 현재의 카운트 값
  function countReducer(oldCount, action) {
    if (action.type === "UP") {
      return oldCount + action.number;
    } else if (action.type === "DOWN") {
      return oldCount - action.number;
    } else if (action.type === "RESET") {
      return 0;
    }
  }

  // 읽을 때 쓰는 함수 = count, 변경할 때 쓰는 함수 = countDispatch
  const [count, countDispatch] = useReducer(countReducer, 0);
  function down() {
    countDispatch({ type: "DOWN", number: number });
  }
  function reset() {
    countDispatch({ type: "RESET", number: number });
  }
  function up() {
    countDispatch({ type: "UP", number: number });
  }

  function changeNumber(event) {
    // e.target.value는 기본적으로 문자이기 때문에 Number로
    // 컴포팅하면서 숫자 변환
    setNumber(Number(event.target.value));
  }
  return (
    <div>
      <input type="button" value="-" onClick={down}></input>
      <input type="button" value="0" onClick={reset}></input>
      <input type="button" value="+" onClick={up}></input>
      <input type="text" value={number} onChange={changeNumber} />
      <span>{count}</span>
    </div>
  );
}
