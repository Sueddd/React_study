const initialState = [
  {
    id: 1,
    title: "todo-1",
    content: "todo-1",
  },
];

// state 에는 자동으로 initailState가 들어감
// context를 사용할 때처럼 value를 따로 넘겨주지 않아도 바로 사용가능
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  } 
};
export default reducer;
