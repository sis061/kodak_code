import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./Section01Best.css";

import { useNavigate } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";

import { useState } from "react";
// --data 파일 import--
import data from "../../data/data";
import { Data } from "@/App";

function Section01Best() {
  // --멀티탭 구성--
  let [view, setView] = useState<number>(1);
  let res: JSX.Element | string = " ";

  if (view === 1) {
    res = <BestTotal items={[]} res1={[]}></BestTotal>;
  } else if (view === 2) {
    res = <BestOuter items={[]} res1={[]}></BestOuter>;
  } else if (view === 3) {
    res = <BestTop items={[]} res1={[]}></BestTop>;
  } else {
    res = <BestBottom items={[]} res1={[]}></BestBottom>;
  }

  let navigate = useNavigate();

  // --멀티탭 구성--
  return (
    <div className="slide_productlist">
      <div className="tabs">
        <div className="title">
          <div className="sectionTit">베스트 아이템</div>
          <p className="subTit">BEST ITEM</p>
        </div>
        {/* --멀티탭-- */}
        <div className="tabList">
          <Nav
            className="text-grey justify-content-center fw-bold "
            variant="underline"
            defaultActiveKey="#0"
            as="ul"
          >
            <Nav.Item as="li">
              <Nav.Link
                href={""}
                eventKey="#0"
                onClick={() => {
                  setView(1);
                }}
              >
                전체
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                eventKey="#1"
                href={""}
                onClick={() => {
                  setView(2);
                }}
              >
                아우터
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                eventKey="#2"
                href={""}
                onClick={() => {
                  setView(3);
                }}
              >
                상의
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                eventKey="#3"
                href={""}
                onClick={() => {
                  setView(4);
                }}
              >
                하의
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        {/* --멀티페이지-- */}
        {res}
        <Button
          onClick={() => {
            navigate("/detail/12");
          }}
          className="sectionVeiwMoreBtn rounded-0 fs-10p fw-bold"
          variant="outline-secondary"
        >
          VIEW MORE
        </Button>{" "}
      </div>
    </div>
  );
}

interface BestItemModalProps {
  items: typeof data;
  res1: number[];
}

// --멀티페이지 Modal 1 전체--
function BestTotal(_props: BestItemModalProps): JSX.Element {
  let [items] = useState<Data[]>(data);
  let [res1] = useState<number[]>([0, 1, 2, 3]);
  return (
    <div className="tabContent">
      <div className="container">
        <div className="row">
          {items.slice(0, 4).map((ele, index) => (
            <ProdTab1 key={ele.id} items={ele} res1={res1} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
// --멀티페이지 Modal 2 아우터--

function BestOuter(_props: BestItemModalProps) {
  let [items] = useState<Data[]>(data);
  let [res1] = useState<number[]>([4, 5, 6, 7]);
  return (
    <div className="tabContent">
      <div className="container">
        <div className="row">
          {items.slice(4, 8).map((ele, index) => (
            <ProdTab1 key={ele.id} items={ele} res1={res1} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
// --멀티페이지 Modal 3 상의--
function BestTop(_props: BestItemModalProps) {
  let [items] = useState<Data[]>(data);
  let [res1] = useState<number[]>([8, 9, 10, 11]);
  return (
    <div className="tabContent">
      <div className="container">
        <div className="row">
          {items.slice(8, 12).map((ele, index) => (
            <ProdTab1 key={ele.id} items={ele} res1={res1} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
// --멀티페이지 Modal 4 하의--
function BestBottom(_props: BestItemModalProps) {
  let [items] = useState<Data[]>(data);
  let [res1] = useState<number[]>([12, 13, 14, 15]);
  return (
    <div className="tabContent">
      <div className="container">
        <div className="row">
          {items.slice(12, 16).map((ele, index) => (
            <ProdTab1 key={ele.id} items={ele} res1={res1} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProdTabProps {
  items: Data;
  res1: number[];
  i: number;
}

// --멀티페이지 내용 props--
function ProdTab1(props: ProdTabProps) {
  // --Hover Effect 구성--
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  let navigate = useNavigate();

  const Items = props.items;

  return (
    <div className="col-md-3 tabItem">
      <Nav.Link
        onClick={() => {
          navigate("/detail/" + props.res1[props.i]);
        }}
        className="c1"
      >
        <div
          className={`prodImg  ${isHovering ? "prodImgChg" : ""}`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="prodImgBg"></div>
          <img
            src={"/kodak/"+Items.imgUrl}
            alt={Items.alt}
            className={isHovering ? "prodImginactive" : "prodImgactive"}
          />
          <img
            src={"/kodak"+Items.imgUrlSub}
            alt={Items.alt}
            className={isHovering ? "prodImgactive" : "prodImginactive"}
          />
        </div>
        <div className={`tabInfo ${isHovering ? "tabInfoChg" : ""}`}>
          <span>{Items.title}</span>
          <span>{Items.price.toLocaleString()}원</span>
        </div>
        <div className="tabIcon">
          <img src="/kodak/img/011_heart_icon.png" alt="찜 아이콘" />
          <img src="/kodak/img/012_cart_icon.png" alt="장바구니 아이콘" />
        </div>
      </Nav.Link>
    </div>
  );
}

export default Section01Best;
