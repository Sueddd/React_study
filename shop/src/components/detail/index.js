import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

// 3. context import 해오기
import { Context1 } from "../../App";

let YellowBtn = styled.button`
  // props 문법 사용 가능
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

function Detail(props) {
  // 4. 전달받은 value들은 useContext를 이용해 사용할 수 있다.
  // useContext는 보관함을 해체해주는 함수이다.
  // {state1, state2.. } object 형태로 state들이 남게 된다.
  // 내가 꺼내 쓰고 싶은 state를 변수로 작성하면 된다.
  let { 재고, shoes } = useContext(Context1);

  // 두번 출력되는 이유
  // useEffect코드는 두번정도 실행될 수 있음
  // useEffect 쓰는 이유 > 실행 시점이 약간 다르다.
  // 랜더링이 되고 난 후에 useEffect안의 코드가 실행된다.
  // 복잡한 계산을 할 때는 html을 먼저 실행한 후 어려운 작업 실행 가능
  // 서버에서 데이터 가져오는 작업, 타이머 장착에서 사용되기도함.
  // sideEffect : 함수의 핵심 기능과 상관없는 부가기능
  let [show, setShow] = useState(true);

  // return을 주면 useEffect 동작 전에 실행된다.
  let [count, setCount] = useState(0);

  // 탭변경 state
  let [tab, setTab] = useState(0);
  let [animaition, setAnimation] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setShow(false);
      setAnimation("end");
    }, 500);
    return () => {
      // 기존 요청과 겹칠 일이 없게
      console.log(2);
      clearTimeout(a);
      setAnimation("");
    };
  }, []);

  // unmount시 1회 코드 실행하고 싶으면
  // useEffect(() => {
  //   return () => {

  //   }
  // })

  // 유저가 url파라미터에 입력한 값을 가져오려면 useParams
  let { id } = useParams();
  let findGood = props.shoes.find(function (x) {
    return x.id == id;
  });

  return (
    <div className={`container start ${animaition}`}>
      {show && <div className="alert alert-warning">2초이내 구매시 할인 </div>}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      {재고[0]}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findGood.title}</h4>
          <p>{findGood.content}</p>
          <p>{findGood.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      {/** defaultActiveKey = 처음 들어갔을 때 기본으로 눌러있을 키 */}
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent shoes={props.shoes} tab={tab} />
    </div>
  );
}

function TabContent({ shoes, tab }) {
  let [fade, setFade] = useState("");
  let { 재고 } = useContext(Context1);

  // setTimeout을 안써주면 동작을 안함
  // 리액트의 automatic batching기능 때문에
  // state 변경함수를 쓸때마다 재랜더링을 하는 게 아니라
  // state 변경함수를 다 쓰고 나서 마지막에 재랜더링을 한 번 하기 때문이다.
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start + ${fade}`}>
      {[<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
export default Detail;
