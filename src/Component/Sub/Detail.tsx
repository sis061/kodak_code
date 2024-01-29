import React, { ReactEventHandler } from "react";
import { useState, useEffect, useRef } from "react";
import "../../App.css";
import "./Detail.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Nav } from "react-bootstrap";

import ScrollToTop from "../../ScrollTop";

import { useParams, Link } from "react-router-dom";

import { addItem } from "../../store";
import { useDispatch } from "react-redux";
import { Data } from "@/App";

enum TabIndex {
  ProductInfo = 0,
  DeliveryInfo = 1,
  Review = 2,
}

interface DetailProps {
  items: Data[];
}

function Detail(props: DetailProps): JSX.Element {
  // --ScrollDown -> 좌우 wrap 고정--
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  // -- prodDetail_L 탭 변수 : onclick -> 해당 위치로 Scroll--
  const Tabs: Record<
    number,
    {
      element: React.MutableRefObject<null>;
      onMoveToElement: ReactEventHandler;
    }
  > = {
    [TabIndex.ProductInfo]: useMoveScroll(),
    [TabIndex.DeliveryInfo]: useMoveScroll(),
    [TabIndex.Review]: useMoveScroll(),
  };

  // --URL params--

  let { id } = useParams<{ id: string }>();
  let Ids = props.items.find((x) => x.id === Number(id));

  const [quantity, setQuantity] = useState<number>(1);

  // --상품 수량에 따라 숫자 카운트--
  function handleClickCounter(num: number): void {
    setQuantity((prev) => prev + num);
  }
  // console.log(handleClickCounter);

  // --센터 상품정보 이미지 갯수 조절 : 5개 일시 데이터 가져와서 이미지 표기--

  let [isVisibleImg, setisVisibleImg] = useState<boolean>(true);
  useEffect(() => {
    +Ids.imgUrlDetail5 === 0
      ? setisVisibleImg(false)
      : setisVisibleImg(true);
  }, [Ids.imgUrlDetail5]);
  // console.log(+Ids.imgUrlDetail5);
  // --장바구니 이동 팝업 변수--
  const [isVisiblePop, setIsVisiblePop] = useState<boolean>(true);

  return (
    <div id="sub">
      <ScrollToTop />
      <DetailToCart
        isVisiblePop={isVisiblePop}
        setIsVisiblePop={setIsVisiblePop}
      />
      <div className="prodDetail">
        <ProdDetailLeft scrollPosition={scrollPosition} Ids={Ids} Tabs={Tabs} />
        <ProdDetailCenter Ids={Ids} Tabs={Tabs} isVisibleImg={isVisibleImg} />
        <ProdDetailRight
          scrollPosition={scrollPosition}
          Ids={Ids}
          quantity={quantity}
          handleClickCounter={handleClickCounter}
          // isVisiblePop={isVisiblePop}
          setIsVisiblePop={setIsVisiblePop}
        />
      </div>
      <div style={{ clear: "both" }}></div>
      <Review Tabs={Tabs} />
    </div>
  );
}

// --prodDetail_L 목록 onclick -> 해당 위치로 Scroll 함수--

function useMoveScroll() {
  const element = useRef(null);
  const onMoveToElement: ReactEventHandler = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveToElement } as const;
}

interface DetailCompProps {
  DetailL: {
    scrollPosition: number;
    Ids: Data;
    Tabs: Record<
      number,
      {
        element: React.MutableRefObject<null>;
        onMoveToElement: React.ReactEventHandler;
      }
    >;
  };
  DetailC: {
    Ids: Data;
    Tabs: Record<
      number,
      {
        element: React.MutableRefObject<null>;
        onMoveToElement: React.ReactEventHandler;
      }
    >;
    isVisibleImg: boolean;
  };
  DetailR: {
    scrollPosition: number;
    Ids: Data;
    quantity: number;
    handleClickCounter: (num: number) => void;
    setIsVisiblePop: React.Dispatch<React.SetStateAction<boolean>>;
  };
  DetailReview: {
    Tabs: Record<
      number,
      {
        element: React.MutableRefObject<null>;
        onMoveToElement: React.ReactEventHandler;
      }
    >;
  };
}

// -------left area-------
function ProdDetailLeft({
  scrollPosition,
  Ids,
  Tabs,
}: DetailCompProps["DetailL"]) {
  return (
    <div className="prodDetail_L">
      <div
        className={`
              headArea ${scrollPosition > 100 ? "detailLFixed" : " "}
            `}
      >
        <div style={{ margin: "0" }}>
          <h2 className="prdtdetailtitle">{Ids.title}</h2>
          <h1 className="prdt_new_price">
            {/* --price Number 함수 통해 원 단위로 변환-- */}
            {Ids.price.toLocaleString()}원
          </h1>
          <Nav
            className="container text-grey justify-content-center fw-bold"
            variant="underline"
            as="ul"
          >
            <Nav.Item as="li">
              <Nav.Link className="col" onClick={Tabs[0].onMoveToElement}>
                상품 정보
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="col" onClick={Tabs[1].onMoveToElement}>
                배송 안내
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="col" onClick={Tabs[2].onMoveToElement}>
                REVIEW
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </div>
  );
}

// -------centre img area-------
function ProdDetailCenter({
  Ids,
  Tabs,
  isVisibleImg,
}: DetailCompProps["DetailC"]) {
  // --Slick Slider setting-
  const settings = {
    dots: true,
    fade: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "dots_custom",
  };
  return (
    <div className="prodDetail_C">
      <div>
        <Slider {...settings}>
          <img src={"/kodak"+Ids.imgUrl} alt={Ids.alt} />
          <img src={"/kodak"+Ids.imgUrlSub} alt={Ids.alt} />
        </Slider>
      </div>
      <div className="prdtBottom">
        <div className="prodtAdditional">
          <img src="/kodak/img/SubImg/detail_common_clear.jpg" alt={Ids.alt} />
          <img
            ref={Tabs[0].element}
            src="/kodak/img/SubImg/detail_common_about.jpg"
            alt={Ids.alt}
          />
          <img src={"/kodak"+Ids.imgUrlDetail1} alt={Ids.alt} />
          <img src={"/kodak"+Ids.imgUrlDetail2} alt={Ids.alt} />
          <img src={"/kodak"+Ids.imgUrlDetail3} alt={Ids.alt} />
          <img src={"/kodak"+Ids.imgUrlDetail4} alt={Ids.alt} />
          <img
            src={"/kodak"+Ids.imgUrlDetail5}
            alt={Ids.alt}
            className={isVisibleImg ? "" : "detailHidden"}
          />
          <img src={"/kodak"+Ids.imgUrlDetailCleaning} alt={Ids.alt} />
          <img src="/kodak/img/SubImg/detail_common_license.jpg" alt={Ids.alt} />
          <img
            ref={Tabs[1].element}
            src="/kodak/img/SubImg/detail_common_deliver.jpg"
            alt={Ids.alt}
          />
        </div>
      </div>
    </div>
  );
}

// -------right area-------
function ProdDetailRight({
  scrollPosition,
  Ids,
  quantity,
  handleClickCounter,
  setIsVisiblePop,
}: DetailCompProps["DetailR"]) {
  // --장바구니, store.js 정보 가져오기--
  let dispatch = useDispatch();

  return (
    <div className="prodDetail_R">
      <div
        className={`
              orderArea ${scrollPosition > 100 ? "detailRFixed" : " "}
            `}
      >
        <div className="infoArea">
          <div className="totalProducts">
            <p>※ 수량을 선택해주세요.</p>
            <table>
              <colgroup>
                <col style={{ width: "270px" }} />
                <col style={{ width: "80px" }} />
                <col style={{ width: "150px" }} />
              </colgroup>
              <tbody className="">
                <tr>
                  <td>{Ids.title}</td>
                  <td>
                    <span className="quantity">
                      <button
                        type="button"
                        disabled={quantity === 1}
                        aria-label="수량 내리기"
                        onClick={() => handleClickCounter(-1)}
                        className="QuantityDown down"
                      >
                        -
                      </button>
                      <input
                        id="quantity"
                        type="number"
                        min={1}
                        value={quantity}
                        max={10}
                        readOnly
                        // value="1"
                      />
                      <button
                        type="button"
                        disabled={quantity > 9}
                        aria-label="수량 올리기"
                        onClick={() => handleClickCounter(1)}
                        className="QuantityUp up"
                      >
                        +
                      </button>
                    </span>
                  </td>
                  <td className="right">
                    <span className="quantity_price">
                      {(Ids.price * quantity).toLocaleString()}원
                      <input
                        type="hidden"
                        name="option_box_price"
                        className="option_box_price"
                        value="89000"
                      />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="totalPrice">
            <strong>Total</strong> :{" "}
            <span className="total">
              <strong>
                <em>{(Ids.price * quantity).toLocaleString()}원</em>
              </strong>{" "}
              ({quantity}EA)
            </span>
          </div>
          <div className="btnWrap">
            <div className="btnFlexBox">
              <button
                className="btn_order wbtns"
                onClick={() => {
                  dispatch(
                    addItem({
                      id: Ids.id,
                      imgUrl: Ids.imgUrl,
                      title: Ids.title,
                      price: Ids.price,
                      count: quantity,
                    })
                  );
                  setIsVisiblePop(false);
                }}
              >
                BUY
              </button>
              <button
                className="btn_cart wbtns"
                onClick={() => {
                  dispatch(
                    addItem({
                      id: Ids.id,
                      imgUrl: Ids.imgUrl,
                      title: Ids.title,
                      price: Ids.price,
                      count: quantity,
                    })
                  );
                  setIsVisiblePop(false);
                }}
              >
                CART
              </button>
              <button className="btn_gift wbtns">GIFT</button>
            </div>
          </div>
          <div className="naver_btnWrap">
            <img src="/kodak/img/naver.png" alt="네이버결제" />
          </div>
        </div>
      </div>
    </div>
  );
}
// -------review area-------
function Review({ Tabs }: DetailCompProps["DetailReview"]) {
  return (
    <div className="reviewWrap" ref={Tabs[2].element}>
      <div className="reviewTitle">Review</div>
      <div className="reviewContent">
        <div className="reviewContentHeader">
          <span>REVIEW</span>
          <span>(1)</span>
        </div>
        <div className="reviewContentSummary">
          <div className="summaryL">
            <div className="summaryLScore">
              <div className="summaryLIcon">
                <img src="/kodak/img/star_icon.png" alt="별 아이콘" />
              </div>
              <span className="summaryLText">5.0</span>
            </div>
            <div className="summaryLPercent">
              <b>100%</b> 의 구매자가 이 상품을 좋아합니다.
            </div>
          </div>
          <div className="summaryR">
            <ul>
              <li className="summaryRFilter_HL">
                <div className="summaryRFilterTitle">아주 좋아요</div>
                <div className="summaryRFilterGauge">
                  <div className="summaryRFilterGauge_percentile"></div>
                </div>
                <div className="summaryRFilterCount">1</div>
              </li>
              <li className="summaryRFilter">
                <div className="summaryRFilterTitle">맘에 들어요</div>
                <div className="summaryRFilterGauge"></div>
                <div className="summaryRFilterCount">0</div>
              </li>
              <li className="summaryRFilter">
                <div className="summaryRFilterTitle">보통이에요</div>
                <div className="summaryRFilterGauge"></div>
                <div className="summaryRFilterCount">0</div>
              </li>
              <li className="summaryRFilter">
                <div className="summaryRFilterTitle">그냥 그래요</div>
                <div className="summaryRFilterGauge"></div>
                <div className="summaryRFilterCount">0</div>
              </li>
              <li className="summaryRFilter">
                <div className="summaryRFilterTitle">별로예요</div>
                <div className="summaryRFilterGauge"></div>
                <div className="summaryRFilterCount">0</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="reviewContentList">
          <ul>
            <li className="reviewList">
              <div className="ListL">
                <div className="reviewListScore">
                  <div className="reviewListScoreStar">
                    <div className="reviewListScoreIcon">
                      <img src="/kodak/img/star_icon.png" alt="별 아이콘" />
                    </div>
                    <div className="reviewListScoreIcon">
                      <img src="/kodak/img/star_icon.png" alt="별 아이콘" />
                    </div>
                    <div className="reviewListScoreIcon">
                      <img src="/kodak/img/star_icon.png" alt="별 아이콘" />
                    </div>
                    <div className="reviewListScoreIcon">
                      <img src="/kodak/img/star_icon.png" alt="별 아이콘" />
                    </div>
                    <div className="reviewListScoreIcon">
                      <img src="/kodak/img/star_icon.png" alt="별 아이콘" />
                    </div>
                  </div>
                  <div className="reviewListScoreText">아주 좋아요</div>
                </div>
                <div className="reviewListText">
                  사이즈가 딱 좋아요!!! 튼튼해서 더 좋습니다.
                  <br />
                  물세탁이 안되어 관리를 잘해야겠어요.
                </div>
                <div className="reviewListLike">
                  <div className="reviewListLikeContainer">
                    <div className="reviewListLikeBtn likeBtn">
                      <img src="/kodak/img/thumb_up_icon.png" alt="추천 아이콘" />
                      <span>도움돼요</span>
                    </div>
                    <div className="reviewListLikeBtn unlikeBtn">
                      <img src="/kodak/img/thumb_down_icon.png" alt="비추천 아이콘" />
                      <span>도움안돼요</span>
                    </div>
                    <div className="reviewListLikeComment">
                      <Link to={""} className="reviewListLikeLink">
                        <span>댓글</span>
                        <span>0</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="reviewListComment"></div>
              </div>
              <div className="ListR">
                <div className="reviewListName">
                  <strong>2765440***</strong>
                  님의 리뷰입니다.
                </div>
                <ul>
                  <li>
                    <p className="reviewOptName">키</p>
                    <p className="reviewOptVal">170cm</p>
                  </li>
                  <li>
                    <p className="reviewOptName">몸무게</p>
                    <p className="reviewOptVal">75kg</p>
                  </li>
                  <li>
                    <p className="reviewOptName">평소사이즈-상의</p>
                    <p className="reviewOptVal">L</p>
                  </li>
                  <li>
                    <p className="reviewOptName">평소사이즈-하의</p>
                    <p className="reviewOptVal">30</p>
                  </li>
                  <li>
                    <p className="reviewOptName">사이즈</p>
                    <p className="reviewOptVal">230</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//------------BUY, CART btn click -> /cart 이동하는 팝업 박스------------
function DetailToCart({ isVisiblePop, setIsVisiblePop }) {
  return (
    <div className={isVisiblePop ? "detailHidden" : "detailToCartPop"}>
      <div className="txtWrap">
        <p>장바구니에 상품이 담겼습니다.</p>
      </div>
      <div className="btnWrap">
        <button>
          <Link to="/cart">장바구니 이동</Link>
        </button>
        <button onClick={() => setIsVisiblePop(true)}>쇼핑 계속하기</button>
      </div>
    </div>
  );
}

export default Detail;
