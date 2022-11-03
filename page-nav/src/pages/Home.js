import { Row, Col, Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("SOmething Happened");
    props.logout();
    navigate("/login");
  };

  useEffect(() => {
    if(props.status){
        console.log("Authentication successfull")
    }
    else{
        navigate("/login")
    }
  }, []);

  return (
    <>
      <Row>
        <Col xl={24}>
          <h1>Home page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="primary" onClick={handleClick}>
            Logout
          </Button>
        </Col>
      </Row>
    </>
  );
}
