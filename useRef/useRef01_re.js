import React, { useState, useRef } from "react";

// 함수형 컴포넌트이기 때문에 랜더링이 된다는 것은
// 다시 App이라는 함수가 실행된다는 것이다.
const App = () => {
  const [state, setState] = useState(0);
  const countRef = useRef(0);

  const addSetState = () => {
    setState(state + 1);
  };

  // ref는 값을 불러올 때 무조건 countRef.current 이런 식으로 불러와야 한다.
  // 또한, ref를 실행해도 화면이 랜더링 되는 것이 아니기 때문에
  // 화면을 랜더링 해주는 effect이나 state 같은 함수가 없으면 랜더링 할 수 없다.
  // 또한 ref는 랜더링을 해줄 때 값을 유지하기 때문에 effect와 붙어서 사용하면 좋다.

  const addCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <p>state 변수 : {state}</p>
      <p>ref 변수 : {countRef.current}</p>
      <button onClick={addSetState}>state올려!</button>
      <button onClick={addCountRef}>ref올려!</button>
    </div>
  );
};

export default App;
