import React, { useEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);

  // input 태그에 ref = {inputRef} 라고 준 것은
  // input 속성을 ref의 객체,
  // 즉 inputRef.current의 값, {current : input} 이라고 준 것이다.
  // 그렇기 때문에 처음 랜더링 때 실행되는 useEffect 함수 내부의
  // inputRef.current > input요소의 값을 갖고와 inputRef.current.focus()라고 주면
  // 첫 랜더링 때 돔 요소에 직접 접근하지 않아도 input에 focus가 되어있는 것을 볼 수 있다.

  const login = () => {
    // 여기서는 inputRef.current가 즉 input 요소이기 때문에
    // inputRef.current.value를 주면 input의 value값을 가져올 수 있다.
    alert(`환영합니다 ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username">
        {" "}
      </input>
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default App;
