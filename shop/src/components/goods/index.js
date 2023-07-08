import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

function Color(data) {
  const navigate = useNavigate();
  return (
    <>
      <Col sm>
        <img
          onClick={() => {
            navigate(`detail/${data.data.id}`);
          }}
          src={data.data.img}
          width="80%"
        />
        <h4>{data.data.title}</h4>
        <p>{data.data.price}</p>
      </Col>
      ;
    </>
  );
}
export default Color;
