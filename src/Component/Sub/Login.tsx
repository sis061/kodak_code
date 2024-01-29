import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import "../../App.css";
import "./Login.css";

import ScrollToTop from "../../ScrollTop";

export default Login;

function Login(): JSX.Element {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEmailHandler = (e: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => {
    setId(e.currentTarget.value);
  };
  const onPasswordHandler = (e: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setId("");
    setPassword("");

    // console.log('Email', Email);
    // console.log('Password', Password);
  };
  return (
    <div id="sub">
      <ScrollToTop />
      <div className="loginWrap">
        <div className="widthHolder">
          <form>
            <div className="loginBox">
              <h3 className="loginBoxTitle">Login</h3>
              <fieldset>
                <legend>회원로그인</legend>
                <label className="id" title="아이디">
                  <input
                    id="member_id"
                    name="member_id"
                    fw-filter="isFill"
                    fw-label="아이디"
                    fw-msg=""
                    className="inputTypeText"
                    placeholder=""
                    value={id}
                    onChange={onEmailHandler}
                    type="text"
                  />
                </label>
                <label className="pw" title="비밀번호">
                  <input
                    id="member_passwd"
                    name="member_passwd"
                    fw-filter="isFill&amp;isMin[4]&amp;isMax[16]"
                    fw-label="패스워드"
                    fw-msg=""
                    autoComplete="off"
                    value={password}
                    onChange={onPasswordHandler}
                    type="password"
                  />
                </label>
                <Link to={""} onClick={onSubmitHandler} className="loginBtn">
                  로그인
                </Link>
                <p className="loginBoxTxtSmall">
                  아직 회원이 아니신가요? 가입 후 쿠폰 및 포인트 적립 등의
                  다양한 혜택을 받아보세요.
                </p>
                <ul>
                  <li>
                    <Link to={""}>비회원 주문조회</Link>
                  </li>
                  <li>
                    <Link to={""}>아이디찾기</Link>
                  </li>
                  <li>
                    <Link to={""}>비밀번호찾기</Link>
                  </li>
                  <li>
                    <Link to={""}>회원가입</Link>
                  </li>
                </ul>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
