import React, { useState, useRef, useEffect, useMemo } from "react";

// (3)
const hardCalculate = (number) => {
  console.log("어려운 계산!");
  for (let i = 0; i < 999999999; i++) {} // 생각하는 시간(딜레이 주려고), 의미없는 for루프
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("짱쉬운 계산!");
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  // (2)
  // 랜더링이 될 때마다 hardSum 변수는 초기화가 되고
  // hardCaculate라는 함수가 반복적으로 불려서 반복적으로 값을 할당해준다.

  // (5) 이 useMemo의 두번째 인자 배열이 바뀔 때만 hardCalculate를 다시 호출해서
  // hardSum에 할당을 해준다. 즉, 배열이 조건이 들어가는 공간이다.
  // const hardSum = hardCalculate(hardNumber);
  // 이렇게 되면 쉬운 계산기에서는 delay가 되지 않는 것을 알 수 있다
  // 배열 내의 hardNumber일 때만 hardSum이 재할당되기 때문이다.
  const hardSum = useEffect(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      {/* 1 */}
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum} </span>

      {/**(4) 쉬운 계산기에는 의미없는 forloop가 없는데도
       * 1초씩 반응이 느리다는 걸 알 수 있다. 이건 input내의 easyNumber state가
       * 변경되기 때문에 App 컴포넌트가 다시 랜더링되는 것이고 이는 곧,
       * hardSum도 다시 실행되면서 forloop를 돌게 된다는 뜻이다.
       *
       * 그렇다면 easyNumber state를 변경할 때는 hardCaculate를 부르지 않는 법은 없을까?
       * 이 때 useMemo라는 훅을 사용하면 된다.
       * 어떠한 조건이 만족될 때만 변수들이 초기화 될 수 있고,
       * 조건이 만족되지 않으면 이전에 갖고 있는 값을 그대로 사용할 수 있다.
       * 이를 memoization이라고 한다.
       */}
      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum} </span>
    </div>
  );
}

export default App;
