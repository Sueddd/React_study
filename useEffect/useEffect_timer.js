import React, { useEffect } from "react";

const Timer = (props) => {
  // timer 컴포넌트가 화면에 처음 랜더링될때만 실행될 useEffect임
  useEffect(() => {
    // 1초마다 반복되는 타이머 만들어주기
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중...");
    }, 1000);

    // 타이머도 같이 멈추게 하기 위해서는 useEffect의 return값을
    // 정리해주면 된다.
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되어씁니다");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default Timer;
