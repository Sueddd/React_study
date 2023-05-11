import React, { useState, useRef, useEffect } from "react";

// ※ 문제 랜더링이 몇 번 진행이 되는지 출력해주자

const App = () => {
  const [count, setCount] = useState(1);

  // ※ useEffect를 사용하는 경우 > 무한 루프
  // const [renderCount, setRenderCount] = useState(1);
  // useEffect(() => {
  //   console.log("렌더링!");
  //   setRenderCount(renderCount + 1);
  // });
  // 우선, 버튼을 누르면 count가 올라갈 것이고, 그럼 랜더링을 하는데
  // 랜더링이 될 때 useEffect가 실행이 될 것이다.
  // useEffect 안에도 renderCount state를 업데이트를 시키는 코드가 들어있다.
  // 그렇기 때문에 무한루프를 돌게 되는 것이다.

  // ※ useRef 를 활용하는 경우
  // renderCount를 state가 아닌 Ref로 저장
  const renderCount = useRef(1);

  // ref는 리랜더링을 발생시키지 않기 때문에 무한루프에 빠지지 않는다
  // 즉 ref는 변화는 감지하지만 랜더링을 발생시키지 않는 값을 다룰 때 사용
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 수 : ", renderCount.current);
  });

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
};

export default App;
