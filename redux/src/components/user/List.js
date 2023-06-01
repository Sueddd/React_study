import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  // 2. UserList에 useSelector를 이용해서 rootreducer에 key값으로 넣어준
  // user을 갖고온다. 이는 reucer에 있는 state를 골라서 가져오는 것 .

  // rootreducer에 넣어준 user는 reducer이다.
  // initialstate를 state로 받은 형태인 reducer!

  // useSelector를 여기서 자유롭게 사용할 수 있는 건 provider를 통해
  // store를 전달해줘서 전역에서 사용할 수 있게 만들어줬기 때문 > redux Provider
  const UserList = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // dispatch를 만들어주면 전체 reducer에 전달이 된다.
  const DeleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };

  return (
    <>
      {UserList.length > 0 ? (
        UserList.map((user, index) => (
          <div key={user.id}>
            {index + 1}. {user.name}
            <button onClick={() => DeleteUser(user.id)}>삭제</button>
          </div>
        ))
      ) : (
        <p>현재 등록된 사용자가 없습니다</p>
      )}
    </>
  );
};
export default UserList;
