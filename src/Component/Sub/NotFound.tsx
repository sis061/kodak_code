import React from "react";
import "../../App.css";

import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../../ScrollTop";

function NotFound(): JSX.Element {
  let navigate = useNavigate();

  return (
    <div id="sub">
      <ScrollToTop />
      <div style={{ textAlign: "center" }}>
        <img src="/kodak/img/4835105_404_icon.png" alt="404 Not Found" />
        <h3 style={{ padding: "10px" }}>요청하신 페이지를 찾을 수 없습니다.</h3>
        <Link
          to=""
          onClick={() => {
            navigate(-1);
          }}
        >
          <h5 style={{ padding: "30px", marginBottom: "50px" }}>
            이전 페이지로 돌아가기
          </h5>
        </Link>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}

export default NotFound;
