import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store";

function Cart() {
  // redux를 사용하면 컴포넌트들이 props 없이 state 공유가능
  // redux를 설치하면 js 파일을 하나 만들어서
  // 거기에 모든 state를 보관할 수 있다.
  // 모든 컴포넌트들이 여기있는 state를 다 빼서 쓸 수 있다.

  const state = useSelector((state) => {
    return state;
  });

  // 3. store.js로 요청보내주는 함수임
  const dispatch = useDispatch();

  return (
    <div>
      {state.user}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((v) => (
            <tr>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.count}</td>
              <td>
                <button
                  onClick={() => {
                    // 4. dispatch(state변경함수()) 이렇게 사용해야 한다.
                    dispatch(changeName());
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
