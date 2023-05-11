import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);
  // 의존성 배열에 아무것도 넣지 않은 useCallback 만들기
  // 맨처음 컴포넌트가 만들어지고 메모이제이션이 될 것이다.
  // someFunction에는 메모이제이션 된 주소가 담겨있는 것이다.

  // number가 메모이제션으로 0이 됐기 때문에 계속해서 0이 있기 때문에
  // 두번째 인자에 number를 넣어주면 number가 바뀌는 것을 볼 수 있다.
  // number가 바뀔 때마다 이 함수가 갱신되고 있다고 보면 된다.
  const someFunction = useCallback(() => {
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number]);

  // nubmerState가 변해도 계속 호출된다.
  // useCallback을 해주면 someFunction이 메모이제이션 되기 때문에
  // 값이 변하지 않아서 실행되지 않는다.
  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;
