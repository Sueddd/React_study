import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicButton from "../../components/Button/Button";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common";
import TodoAddModal from "./componetns/Modal/add-modal";
import TodoList from "./componetns/List/todo-list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { axiosInstance } from "utils/axios";

const TodoPage = () => {
  const params = useParams();
  const [isAddTodoModal, setIsAddTodoModal] = useState(false);
  const [todoList, setTodoList] = useState([]);
  // 백엔드에 todolist를 전달해 줘야함

  useEffect(() => {
    const getTodoList = async () => {
      // axiosInstance baseurl에 주소를 저장해놨기 때문에 todo라고 해도된다
      try {
        const res = await axiosInstance.get("/todo");
        console.log(res);
        setTodoList(res.data.data);
      } catch (err) {
      }
    };
    // 데이터 베이스에 저장되기 때문에 새로고침을 해도 날라가지 않는다.
    // 새로고침을 할 때마다 getTodoList를 실행하니까
    getTodoList();
  }, []);

  // async로 감싸는 순간 addtodo는 프로미스가 된다
  const addTodo = async (title, content) => {
    try {
      if (!title || !content) {
        throw new Error("빈칸을 채워주세요");
      }
      const res = await axiosInstance.post("/todo", {
        title,
        content,
      });
      setTodoList([res.data.data, ...todoList]);
      setIsAddTodoModal(false);
    } catch (err) {
      throw err;
    }
  };

  const showTodoToastMessage = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    toast.promise(addTodo(title, content), {
      pending: "TODO LOADING",
      success: "TODO SUCEESS",
      error: "TODO ERROR",
    });
  };

  const toastOption = {
    autoClose: 2000,
    theme: "colored",
  };

  const handAddTodoModal = () => {
    setIsAddTodoModal(true);
  };

  const handleCloseTodoModal = () => {
    setIsAddTodoModal(false);
  };

  return (
    <>
      {isAddTodoModal && (
        <TodoAddModal
          onAddToDo={showTodoToastMessage}
          onClose={handleCloseTodoModal}
        />
      )}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
          </S.Content>
          <S.ButtonBox>
            <BasicButton
              variant={"primary"}
              size={"full"}
              onClick={handAddTodoModal}
            >
              추가
            </BasicButton>
          </S.ButtonBox>
        </S.Container>
      </S.Wrapper>
      <ToastContainer {...toastOption} />
    </>
  );
};
export default TodoPage;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  color: ${({ theme }) => theme.PALETTE.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};
