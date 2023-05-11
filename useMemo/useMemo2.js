import React, { useState, useEffect, useMemo } from "react";

function App() {
  const [number, seNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // 숫자는 증가하는데 useEffect는 불리지 않는다.
  // 즉 isKorea가 변경될 때만 호출되고,
  // 다른 '비행기 타자'버튼을 누를 때는 호출이 되지 않는다.
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, isKorea);

  // const location = {
  //   country: isKorea ? "한국" : "외국",
  // };

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => seNumber(e.target.value)}
      ></input>
      <h2>어느 나라에 있어요?</h2>
      <p>나라 {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default App;
