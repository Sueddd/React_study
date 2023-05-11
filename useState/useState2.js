import { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업!!!");
  return ["홍길동", "김민수"];
};

function App() {
  const [names, setNames] = useState(() => {
    // 초기값을 가져올 때 어떤 무거운 작업을 해야할 때
    // 바로 안에 값을 넣어주는 게 아니라 콜백 형태로
    // 원하는 값을 리턴해주는 콜백을 넣어주면 맨 처음 화면에 랜더링
    // 할 때만 뜨게 된다.
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    // 새로 업데이트 시켜줄 state는 이전에 존재하는 state와
    // 밀접하게 연관되어있다. 그렇기 때문에 setNames인자 안에 바로
    // 값을 주는 게 아니라 callback함수를 전달해줄 수 있다.
    // 리턴하는 값이 새롭게 업데이트 될 state가 된다.
    // callback의 인자로는 우리가 update해주기 전 이전 상태의 state를 가지고 있게 된다.
    // => prevState
    setNames((prevState) => {
      console.log("이전 state : ", prevState);
      return [input, ...prevState];
      // 처음은 input이 나오고 다음에는 prevState가 나와야함(이전의 값들)
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {/** react에서 map을 이용하여 엘리먼트 출력
       * 이럴 때는 꼭 key가 필요함, 여기서는 키를 배열의 인덱스로 준다.
       */}
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
