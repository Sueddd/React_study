import { useContext, useReducer } from "react";
import reducer, { UserStore, useUserStore } from "../../../../store/1_reducer";

const ReducerQ1List = ({ ingredients }) => {
  // const [state, stateDispatch] = useUserStore();

  const { state, stateDispatch } = useContext(UserStore);

  function handleDelete(id) {
    stateDispatch({
      type: "DELETE",
      payload: id,
    });
  }

  return (
    <tbody>
      {state.map((ingredient) => (
        <tr>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={() => handleDelete(ingredient.id)}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
