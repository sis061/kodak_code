import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./Section03New.css";

import { useNavigate } from "react-router-dom";
import { Button, Nav, Alert } from "react-bootstrap";

import { useState } from "react";
// --data 파일 import--
import axios from "axios";
import data from "../../data/data_Section03_New";

export interface DataSection03 {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  imgUrlSub: string;
  alt: string;
}

function Section03New(): JSX.Element {
  let [count, setCount] = useState<number | JSX.Element>(1);
  let [items, setItems] = useState<DataSection03[]>(data);
  const [show, setShow] = useState<boolean>(false);
  let [res1] = useState<number[]>([
    16, 17, 18, 19, 31, 32, 33, 34, 35, 36, 37, 38,
  ]);
  // --멀티탭 구성--

  return (
    <div className="slide_productlist">
      <div className="tabs">
        <div className="title">
          <div className="sectionTit">신상품</div>
          <p className="subTit">NEW ARRIVALS</p>
        </div>
        <div className="tabContent Section3tab">
          <div className="container">
            <div className="row">
              {items.map((ele, index) => {
                // console.log(ele);
                return (
                  <ProdTab1
                    key={ele.id}
                    items={items[index]}
                    res1={res1}
                    i={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Button
          className="sectionVeiwMoreBtn rounded-0 fs-10p fw-bold"
          variant="outline-secondary"
          // count={count}
          onClick={() => {
            if (count === 1) {
              axios
                .get(
                  "https://sis061.github.io/kodakCloneData/section3_data2.json"
                )
                .then((result) => {
                  let copy10 = [...items, ...result.data];
                  setItems(copy10);
                  setCount(2);
                });
            } else if (count === 2) {
              axios
                .get(
                  "https://sis061.github.io/kodakCloneData/section3_data3.json"
                )
                .then((result) => {
                  let copy11 = [...items, ...result.data];
                  setItems(copy11);
                  setCount(3);
                });
            }

            if (count === 3) {
              setShow(true);
            }
          }}
        >
          VIEW MORE
        </Button>{" "}
        <Alert show={show} variant="light success">
          <p>더 이상 상품이 없습니다.</p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              CLOSE
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
}

// --멀티페이지 내용 props--

interface ProdTabProps {
  items: DataSection03;
  res1: number[];
  i: number;
}

function ProdTab1(props: ProdTabProps): JSX.Element {
  let navigate = useNavigate();
  // --Hover Effect 구성--
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const Items = props.items;

  return (
    <div className="col-md-3 tabItem Section3tabItem">
      <Nav.Link
        onClick={() => {
          navigate("/detail/" + props.res1[props.i]);
        }}
      >
        <div
          className="prodImg"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="prodImgBg"></div>
          <img
            src={"/kodak/"+Items.imgUrl}
            alt={Items.alt}
            className={isHovering ? "prodImgChg" : ""}
          />
        </div>
        <div className="tabInfo">
          <span>{Items.title}</span>
          <span>{Items.price.toLocaleString()}원</span>
        </div>
        <div className={`tabIcon ${isHovering ? "prodIconChg" : ""}`}>
          <img src="/kodak/img/011_heart_icon.png" alt="찜 아이콘" />
          <img src="/kodak/img/012_cart_icon.png" alt="장바구니 아이콘" />
        </div>
      </Nav.Link>
    </div>
  );
}

export default Section03New;
