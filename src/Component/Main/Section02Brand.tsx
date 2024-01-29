import "bootstrap/dist/css/bootstrap.min.css";

import "../../App.css";
import "./Section02Brand.css";

import { useNavigate } from "react-router-dom";
import { Container, Row, Nav } from "react-bootstrap";

function Section02Brand(): JSX.Element {
  let navigate = useNavigate();
  return (
    <div className="slide_productlist Section02">
      <div className="title">
        <div className="sectionTit">브랜드 이슈</div>
        <p className="subTit">BRAND ISSUE</p>
      </div>
      <Container style={{ marginTop: "40px" }}>
        <Row>
          <div className="col section2Box">
            <Nav.Link
              onClick={() => {
                navigate("/detail/29");
              }}
            >
              <img src="/kodak/img/section02_item001.jpg" alt="#" />
            </Nav.Link>
            <p className="section2Tit">KODAK SET-UP ITEM</p>
            <p className="section2SubTit">코디 걱정없는 셋업 아이템</p>
          </div>
          <div className="col section2Box">
            <Nav.Link
              onClick={() => {
                navigate("/detail/30");
              }}
            >
              <img src="/kodak/img/section02_item002.jpg" alt="#" />
            </Nav.Link>
            <p className="section2Tit">코닥 키즈 아이템</p>
            <p className="section2SubTit">
              코닥의 아이코닉한 컬러감과 세련된 디자인
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Section02Brand;
