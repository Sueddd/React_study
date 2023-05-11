import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // // 랜더링 될때마다 매번 실행됨
  // // 마운트 + [item] 변경될때만 실행
  // useEffect(() => {
  //   // 이 콜백은 우리의 컴포넌트가 화면에 랜더링된 직후에 불리는 것
  //   console.log("랜더링!");

  //   // count가 업데이트 될 때만 useEffect를 실행하고 싶다면?
  //   // 두번째 인자로 배열을 주면 된다 -> [count]
  // }, [count]);

  // // 랜더링이 될 때마다
  // useEffect(() => {
  //   console.log("랜더링!");
  // });

  // // mount + count가 변화할 때마다
  // useEffect(() => {
  //   console.log("count 변화");
  // }, [count]);

  // // mount + name이 변화할 때마다
  // useEffect(() => {
  //   console.log("name 변화");
  // }, [name]);

  // 맨처음 화면에 랜더링 될 때만 실행, 그 뒤에는 실행 안함
  useEffect(() => {
    console.log("마운팅 ");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {count} </span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name : {name}</span>
    </div>
  );
}

export default App;
