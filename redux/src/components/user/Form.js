import { useDispatch } from "react-redux";

const UserForm = () => {
  const dispatch = useDispatch();

  const onAddUser = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      payload: {
        id: Math.floor(Math.random() * 1000000),
        name: e.target.user.value,
      },
    });
    // input값 추가되면 초기화
    e.target.user.value = "";
  };

  return (
    <>
      <form onSubmit={onAddUser}>
        <input type="text" name="user" />
        <button>추가</button>
      </form>
    </>
  );
};
export default UserForm;
