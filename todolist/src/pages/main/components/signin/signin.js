import styled from "styled-components";

const Signin = (props) => {
  const handleshow = () => {
    props.setShowSign(true);
  };
  return (
    <Wrapper>
      <Container>
        <LoginButton>LOGIN</LoginButton>
        <SignButton onClick={handleshow}>Sign</SignButton>
        <Inputwrapper>
          <Input placeholder="이메일"></Input>
          <Input placeholder="비밀번호"></Input>
        </Inputwrapper>
        <Logbutton>로그인</Logbutton>
      </Container>
    </Wrapper>
  );
};
export default Signin;

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  background-color: white;
`;

const Container = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid black;
  background-color: white;
  position: relative;
  left: 250px;
  top: 200px;
  border-radius: 5px;
  border: 1px solid #cccccc;
`;

const LoginButton = styled.button`
  width: 175px;
  height: 45px;
  background-color: #333333;
  border: none;

  color: white;
`;

const SignButton = styled.button`
  width: 175px;
  height: 45px;
  background-color: #cccccc;
  border: none;

  color: white;
`;

const Inputwrapper = styled.div`
  text-align: center;
  position: relative;
  top: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 40px;
`;

const Logbutton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background-color: #cfcfcf;
  position: relative;
  top: 68px;
`;
