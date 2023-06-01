const initialState = [
  {
    id: 1,
    name: "김성용",
  },
];

// state 에는 자동으로 initailState가 들어감
// context를 사용할 때처럼 value를 따로 넘겨주지 않아도 바로 사용가능
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};
export default reducer;
