import React, { useState, useRef } from "react";

const App = () => {
  const [renderer, setRenderer] = useState(0);

  // 함수가 불릴 때마다 ref는 계속 값을 유지한다.
  // ref의 값은 컴포넌트의 전생애주기를 통해 유지가 되기 때문
  // 컴포넌트가 브라우저에 마운팅된 순간부터 마운팅이 해제될 때까지
  // 같은 값을 계속해서 유지할 수 있다는 뜻이다.
  const countRef = useRef(0);

  // 함수가 불릴 때마다 변수는 초기화가 된다.
  let countVar = 0;

  // 화면을 랜더링 해주기 위해 사용
  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref", countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("var : ", countVar);
  };

  const printResults = () => {
    console.log(`ref : ${countRef.current}, var : ${countVar}`);
  };

  return (
    <div>
      <p>Ref : {countRef.current} </p>
      <p>Var : {countVar} </p>
      <button onClick={doRendering}>랜더!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
};

export default App;
