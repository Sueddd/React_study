import { useState } from "react";
import OneTodo from "./one-todo";
import axios from "axios";
import { axiosInstance } from "utils/axios";

const TodoList = ({ todoList, setTodoList }) => {
  const updatTodo = async (id, content, state) => {
    const _todoList = [...todoList];
    const todo = _todoList.find((todo) => todo.id === id);

    const response = await axios.
    /*
     * 1. 낙관적 업데이트
     * 2. api를 다시 호출해서 업데이트 > index에 있는 getTodoList() 다시 실행
     */

    /*
    불변성을 지키기 위해, find는 새로운 배열을 반환하지 않기 때문에
    기존에 있는 todolist를 깊은 복사하여 다른 메모리 주소값을 갖게하고 수정한다.
     */

    todo.content = content;
    setTodoList(_todoList);
  };

  const deleteTodo = async (id) => {
    // const todo = todoList.filter((v) => v.id !== id);
    // setTodoList(todo);
    try {
      const response = await axiosInstance.delete(`/todo${id}`);
      console.log(response);
      setTodoList(response);
    } catch {
      console.log(console.error());
    }
  };

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo todo={todo} updatTodo={updatTodo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};
export default TodoList;
