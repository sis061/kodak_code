import { useState, useEffect } from "react";
import "../../App.css";
import "./Cart.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  decreaseCount,
  deleteItem,
  deleteAll,
  CartItem,
} from "../../store";

import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";

import ScrollToTop from "../../ScrollTop";

interface RootState {
  cart: CartItem[];
}

export default Cart;

function Cart() {
  const Cart = useSelector((state: RootState) => state.cart);
  // console.log(Cart[index].name);

  let dispatch = useDispatch();

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState<number[]>([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray: number[] = [];
      Cart.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 초기화
      setCheckItems([]);
    }
  };

  // 선택 항목 삭제 함수
  const deleteHandler = () => {
    dispatch({
      type: deleteItem,
      payload: {
        data: {
          checkItems: checkItems,
        },
      },
    });
    // 초기화
    setCheckItems([]);
  };

  useEffect(() => {
    if (Cart.length === 0) {
      setIsVisible(true);
    }
  }, [Cart]);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  // console.log(isVisible);
  const cartEmptyHandler = () => {
    setIsVisible(true);
  };

  // 주문금액 합계
  const TotalPriceMap: number[] = Cart.map(
    (a, index) => Cart[index].price * Cart[index].count
  );
  const TotalPriceNum: number = TotalPriceMap.reduce((a, b) => a + b, 0);

  // 배송비 : 주문금액 5만원 이상 || 장바구니 비어 있을때 배송비 0원
  const Shipping = (): number => {
    return TotalPriceNum > 49999 || isVisible ? 0 : 2500;
  };
  let ShippingNum = Shipping();

  return (
    <div id="sub">
      <ScrollToTop />
      <div className="cartWrap">
        <div className="titleArea">
          <h2>CART</h2>
        </div>
        <div className="cartContents">
          {/* ------------------장바구니 목록-------------------- */}
          <div className="cartListArea">
            <Table>
              <tbody>
                {Cart.map((a, index) => (
                  <tr key={index}>
                    <td className="cartList">
                      <div className="selectBtn">
                        <input
                          type="checkbox"
                          name={`select-${Cart[index].id}`}
                          onChange={(e) =>
                            handleSingleCheck(e.target.checked, Cart[index].id)
                          }
                          checked={
                            checkItems.includes(Cart[index].id) ? true : false
                          }
                        />
                      </div>
                      <div className="cartImg">
                        <Link to={`/detail/${Cart[index].id}`}>
                          <img
                            src={"/kodak/"+Cart[index].imgUrl}
                            alt={Cart[index].title}
                          />
                        </Link>
                      </div>
                      <div className="cartTitle">
                        <Link to={`/detail/${Cart[index].id}`}>
                          <strong>{Cart[index].title}</strong>
                        </Link>
                      </div>
                      <div className="cartPrice">
                        <strong>{Cart[index].price.toLocaleString()} 원</strong>
                      </div>
                      <div className="cartQuantity">
                        <span className="quantity">
                          <button
                            type="button"
                            disabled={Cart[index].count === 1}
                            aria-label="수량 내리기"
                            onClick={() =>
                              dispatch(decreaseCount(Cart[index].id))
                            }
                            className="QuantityDown down"
                          >
                            -
                          </button>
                          <input
                            id="quantity"
                            type="number"
                            min={1}
                            value={Cart[index].count}
                            max={10}
                            readOnly
                            // value="1"
                          />
                          <button
                            type="button"
                            disabled={Cart[index].count > 99}
                            aria-label="수량 올리기"
                            onClick={() => dispatch(addCount(Cart[index].id))}
                            className="QuantityUp up"
                          >
                            +
                          </button>
                        </span>
                      </div>
                      <div className="cartPriceTotal">
                        <span>
                          <b>
                            {(
                              Cart[index].price * Cart[index].count
                            ).toLocaleString()}{" "}
                            원
                          </b>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className={isVisible ? "" : "cartListEmpty"}>
                  <td>
                    <div className="cartListEmptyBox">
                      <p>장바구니가 비어 있습니다.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          {/* ------------------장바구니 좌측하단 목록 ctrl 버튼-------------------- */}
          <div className="cartBtnArea">
            <input
              type="checkbox"
              id="cartAllChk"
              name="select-all"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleAllCheck(e.target.checked)
              }
              checked={checkItems.length === Cart.length ? true : false}
            />
            <label htmlFor="cartAllChk">전체선택</label>
            <button type="button" onClick={deleteHandler}>
              선택상품삭제
            </button>
            <button
              type="button"
              onClick={() => {
                alert("장바구니를 비우시겠습니까?");
                dispatch(deleteAll());
                cartEmptyHandler();
              }}
            >
              장바구니 비우기
            </button>
          </div>
          {/* ------------------장바구니 우측 하단 결제 버튼-------------------- */}
          <div className="cartOrderArea">
            <div className="orderPrice">
              <p>주문금액</p>
              <div className="orderPriceNum">
                <strong>{TotalPriceNum.toLocaleString()} 원</strong>
              </div>
            </div>
            <div className="orderPrice">
              <p>배송비</p>
              <div className="orderPriceNum">
                <strong>{ShippingNum.toLocaleString()} 원</strong>
              </div>
              <span>※ 50,000원 이상 주문 시 배송비 무료</span>
            </div>
            <div className="orderPriceFinal">
              <p>합계</p>
              <div className="orderPriceNum">
                <strong>
                  {(TotalPriceNum + ShippingNum).toLocaleString()} 원
                </strong>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="orderBtnWrap">
              <div className="orderBtn50 btnOrderAll">
                <Link to="/login">전체상품주문</Link>
              </div>
              <div className="orderBtn50 btnOrderSelect">
                <Link to="/login">선택상품주문</Link>
              </div>
              {/* <div></div> */}
              <div className="btn_gift">
                <Link to="/login">선물하기</Link>
              </div>
              <div className="naver_btnWrap">
                <img src="/kodak/img/naver.png" alt="네이버결제" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
