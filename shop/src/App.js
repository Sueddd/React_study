import Button from "react-bootstrap/Button";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bg from "./bg.png";
import Row from "react-bootstrap/Row";

import { createContext, useEffect, useState } from "react";
import data from "./data";
import Color from "./components/goods";

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./components/detail";
import axios from "axios";
import Cart from "./components/cart/index";

// context를 하나 만들어준다. > 보관함이라고 생각하면 된다.
// 1. context 생성
export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);

  let navigate = useNavigate();
  // 버튼 누른 횟수 저장해서 더보기 버튼 한번더 누르면 상품 더 나오게 해주기
  // 버튼을 누르면 로딩중 ui 띄우고
  // 데이터 요청 끝나면 로딩중 ui 숨기기

  let [count, setCount] = useState(2);

  let [loading, setLoading] = useState(false);
  let [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Showshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(`/detail`);
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>
              <Container>
                <Row>
                  {shoes.map((data) => (
                    <Color data={data} />
                  ))}
                </Row>
              </Container>
              {loading && <div>loading...</div>}
              <button
                onClick={() => {
                  setCount(count + 1);
                  if (count > 3) {
                    setShow(true);
                  }
                  axios
                    .get(
                      `https://codingapple1.github.io/shop/data${count}.json`
                    )
                    .then((res) => {
                      setLoading(true);
                      setTimeout(() => {
                        let copy = [...shoes, ...res.data];
                        setShoes(copy);
                        setLoading(false);
                      }, 2000);
                    })
                    .catch(() => {});

                  // 서버로 데이터를 전송하는 post 요청
                  // 객체 형식으로 보낼 수 있음
                  // axios.post("/sdfe", { name: "kim" });

                  // 동시에 요청을 여러개 하려면
                  // Promise.all(
                  //   [axios.get("/url1"), axios.get("/url2")].then(() => {})
                  // );

                  // 원래는 서버와 문자만 주고받을 수 있음
                  // 그래서 객체나 배열을 제이슨 형식으로 주고 받음
                }}
              >
                더보기
              </button>
              {show && <div>더이상 보여드릴 상품이 없습니다. </div>}
            </div>
          }
        />

        {/** URL파라미터 사용가능 => : 붙이기
         * 파라미터는 얼마든지 사용 가능
         */}
        <Route
          path="/detail/:id"
          element={
            // 2. 1에서 만들어줬던 context로 감싸주기.
            // <Context1.Provider> 태그로, value에는 값 넘겨주기
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />

        <Route path="/cart" element={<Cart />} />

        {/** path = "*"는 만들어진 주소 외의 모든 것을 뜻한다.  */}
        {/* <Route path="*" element={<div>없는 페이지에요</div>} /> */}

        {/** "/about" Route 태그로 감싸면 밑의 Route들과 똑같은 효과
              이것을 Nested Routes라고 한다.*/}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>

        {/* <Route path="/about/member" element={<div>없는 페이지에요</div>} />
        <Route path="/about/location" element={<div>없는 페이지에요</div>} /> */}

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      {/** Nested Route를 어디에 보여줄 지 정한다 => Oulet태그로 */}
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
}
export default App;
