import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: "kim",

  // redux의 state변경해주는 법
  // state 수정해주는 함수 만들고 원할 때 그 함수 실행해달라고 store.js에 요청

  // 1. state수정해주는 함수 만들기
  reducers: {
    changeName(state) {
      // kim을 john kim으로 변경
      return "john " + state;
    },
  },
});

// 2. 만든 함수 export 해야함
// user.actions라고 하면 이 안에 state 변경함수들이 남는다.
// let changeName 함수 export 해줌 
// let { changeName } -> user.actions의 자료를 변수로 빼는 문법이다. 
export let { changeName } = user.actions;

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
