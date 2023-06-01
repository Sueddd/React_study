import "./App.css";
import { Provider } from "react-redux";
import reduxConfig from "./store/store";
import User from "./components/user";

function App() {
  // 1. Provider 참조
  // redux에는 context와 달리(하나의 context마다 하나의 provider 생성) 하나의 provider만 존재
  // 따로 생성할 필요가 없음

  // 2. 데이터를 넘기는데 value가 아닌 store를 넘긴다.
  // store --> value들의 집합소(저장소)

  //  3. store를 만들기 위해 store 폴더 생성 > store.js생성 (여기로 이동!)

  // 5. 리덕스의 provider는 단일로 존재하기 때문에 rootReducer라고 하는
  // reducer의 통합 저장소 생성
  // reducer 폴더 생성 -> index.js (rootReducer) -> reducer(user) 생성

  // 6. 만들어진 rootReducer를 store.js에 createStore의 매개변수로 전달

  // 7. user.js 생성 후 reducer 함수 -> rootReducer에 객체의 속성으로 전달
  // 8. 생성된 store전역 상태 사용방법
  //    - useSelector, useDispatch를 사용

  // 4. reduxConfig를 이용해 store 이용
  const store = reduxConfig();

  // app.js에서는 사용x, provider에 감싸져 있기 전에 사용
  // rootReducer에 *등록된 키값*을 이용하여 상태만 선택(select)하여 전역 상태를 가져와 사용
  // 어차피 사용못함
  // const userList = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default App;
