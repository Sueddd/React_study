import { useContext, useReducer, useState } from "react";
import reducer, { UserStore, useUserStore } from "../../../../store/1_reducer";

const Q1Form = () => {
  const id = Math.floor(Math.random() * 10);
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const changeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const { state, stateDispatch } = useContext(UserStore);

  function handleAdd(e) {
    e.preventDefault();
    stateDispatch({
      type: "ADD",
      payload: { id, name, price },
    });
  }

  return (
    <form onSubmit={"onSubmit"}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="재료"
          onChange={changeName}
        />
      </label>
      <label>
        <input
          type="number"
          name="price"
          placeholder="가격"
          onChange={changePrice}
        />
      </label>
      <button type="submit" onClick={handleAdd}>
        추가
      </button>
    </form>
  );
};
export default Q1Form;
