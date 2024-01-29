import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./Section04Rec.css";

import { useNavigate } from "react-router-dom";
import { Button, Container, Nav, Row, ListGroup } from "react-bootstrap";

import { useState } from "react";
import data from "../../data/data";
import { Data } from "@/App";

function Section04Rec(): JSX.Element {
  return (
    <div className="slide_productlist Section04">
      <div className="tabs">
        <div className="title">
          <div className="sectionTit">추천 상품</div>
          <p className="subTit">RECOMMENDED PRODUCTS</p>
        </div>
        <Container style={{ marginTop: "46px" }}>
          <Row>
            <Section04Box01 items={[]} res1={[]} />
            <Section04Box02 items={[]} res1={[]} />
            <Section04Box03 items={[]} res1={[]} />
          </Row>
        </Container>
      </div>
    </div>
  );
}

interface RecItemModalProps {
  items: typeof data;
  res1: number[];
}

// --상세페이지 Modal 1 모자--

function Section04Box01(_props: RecItemModalProps): JSX.Element {
  let [items] = useState<Data[]>(data);
  let [res1] = useState<number[]>([20, 21, 22]);
  let navigate = useNavigate();
  return (
    <div className="col sm section04Box">
      <Nav.Link
        onClick={() => {
          navigate("/detail/20");
        }}
        className="section04BoxTop"
      >
        <img
          src="/kodak/img/section04_top_product001.jpg"
          alt="추천상품 모자 Top Img"
        />
        <p className="section04TopTit">모자</p>
        <p className="section04TopSubTit">코닥만의 무드가 느껴지는 CAP</p>
      </Nav.Link>
      <ListGroup className="list-group" as="ul">
        <ListGroup.Item as="li" className="border-0">
          {items.slice(20, 23).map((ele, index) => (
            <ProdTab1 key={ele.id} items={ele} res1={res1} i={index} />
          ))}
          <Button
            onClick={() => {
              navigate("/detail/21");
            }}
            className="sectionVeiwMoreBtn rounded-0 fs-10p fw-bold"
            variant="outline-secondary"
          >
            VIEW MORE
          </Button>{" "}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

// --상세페이지 Modal 2 신발--

function Section04Box02(_props: RecItemModalProps) {
  let [items] = useState<Data[]>(data);
  let [res1] = useState<number[]>([23, 24, 25]);
  let navigate = useNavigate();
  return (
    <div className="col sm section04Box">
      <Nav.Link
        onClick={() => {
          navigate("/detail/23");
        }}
        className="section04BoxTop"
      >
        <img
          src="/kodak/img/section04_top_product002.jpg"
          alt="추천상품 신발 Top Img"
        />
        <p className="section04TopTit">신발</p>
        <p className="section04TopSubTit">데일리하게 신기 좋은 코닥 슈즈</p>
      </Nav.Link>
      <ListGroup className="list-group" as="ul">
        <ListGroup.Item as="li" className="border-0">
          {items.slice(23, 26).map((ele, index) => (
            <ProdTab1 key={ele.id} res1={res1} items={ele} i={index} />
          ))}
          <Button
            onClick={() => {
              navigate("/detail/24");
            }}
            className="sectionVeiwMoreBtn rounded-0 fs-10p fw-bold"
            variant="outline-secondary"
          >
            VIEW MORE
          </Button>{" "}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

// --상세페이지 Modal 3 가방--

function Section04Box03(_props: RecItemModalProps) {
  let [items] = useState<Data[]>(data);
  let [res1] = useState<number[]>([26, 27, 28]);
  let navigate = useNavigate();
  return (
    <div className="col sm section04Box">
      <Nav.Link
        onClick={() => {
          navigate("/detail/26");
        }}
        className="section04BoxTop"
      >
        <img
          src="/kodak/img/section04_top_product003.jpg"
          alt="추천상품 가방 Top Img"
        />
        <p className="section04TopTit">가방</p>
        <p className="section04TopSubTit">코닥 가방으로 나만의 스타일링 완성</p>
      </Nav.Link>
      <ListGroup className="list-group" as="ul">
        <ListGroup.Item as="li" className="border-0">
          {items.slice(26, 29).map((ele, index) => (
            <ProdTab1 key={ele.id} items={ele} res1={res1} i={index} />
          ))}
          <Button
            onClick={() => {
              navigate("/detail/27");
            }}
            className="sectionVeiwMoreBtn rounded-0 fs-10p fw-bold"
            variant="outline-secondary"
          >
            VIEW MORE
          </Button>{" "}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

// --상세페이지 내용 props--

interface ProdTabProps {
  items: Data;
  res1: number[];
  i: number;
}

function ProdTab1(props: ProdTabProps): JSX.Element {
  let navigate = useNavigate();
  const Items = props.items;
  return (
    <Nav.Link
      onClick={() => {
        navigate("/detail/" + props.res1[props.i]);
      }}
      className="section04BoxList"
    >
      <div className="recImgBox">
        <div className="prodImgBg"></div>
        <img src={"/kodak/"+Items.imgUrl} alt={Items.alt} />
      </div>
      <div className="recInfo">
        <p className="recInfoTit">{Items.title}</p>
        <p className="recInfoSubTit">{Items.price.toLocaleString()}원</p>
      </div>
    </Nav.Link>
  );
}

export default Section04Rec;
