import styled from "styled-components";
import OneCard from "./components/onetodo";

const TodoPage = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <OneCard />
        <AddButton>추가</AddButton>
      </Container>
    </div>
  );
};
export default TodoPage;

const Container = styled.div`
  width: 360px;
  height: 700px;
  border: 1px solid gray;
  position: relative;
  left: 250px;
  top: 100px;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  background-color: #cccccc;
`;

const AddButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #cccccc;
  position: relative;
  top: 610px;
  border: none;
`;
