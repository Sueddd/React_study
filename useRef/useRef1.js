import React, { useState, useRef } from "react";

// 함수형 컴포넌트이기 때문에 랜더링이 된다는 것은
// 다시 App이라는 함수가 실행된다는 것이다.
const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // ref는 하나의 object
  // ref 안의 값에 접근하는 방법 : countRef.current
  // console.log(countRef); // {current : 0}

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    // ref는 아무리 실행시켜도 랜더링이 되지않는다
    // 즉 변화는 하고 있지만 화면이 업데이트가 되지 않는 것
    // 그러나 , ref버튼을 누르고 state버튼을 누르면 변화하는 게 화면에 보인다.
    // 왜냐? state가 화면을 랜더링 시켜주기 때문이다.
    console.log("Ref : ", countRef.current);
    // 콘솔에서는 나온다, 화면만 랜더링이 되지 않을 뿐이다.
    // 자주 바뀌는 값을 ref안에 넣어주면 랜더링이 발생되지 않기 때문에 성능에 좋다.
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}> Ref 올려</button>
    </div>
  );
};

export default App;
