import { faBan, faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const OneCard = () => {
  return (
    <>
      <div>
        <OneWrapper>
          <div>
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div>example</div>
          <div>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div>
            <FontAwesomeIcon icon={faBan} />
          </div>
        </OneWrapper>
      </div>
    </>
  );
};
export default OneCard;

const OneContainer = styled.div`
    
`
const OneWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  height: 80px;
  margin-top: 30px;
  border-radius: 5px;
  padding-top: 5px;
  div:first-child {
    position: relative;
    left: 10px;
  }

  div:nth-child(2) {
    position: relative;
    left: 20px;
  }

  div:nth-child(3) {
    position: relative;
    left: 230px;
  }
  div:nth-child(3) {
    position: relative;
    left: 230px;
  }
  div:nth-child(4) {
    position: relative;
    left: 240px;
  }
`;
