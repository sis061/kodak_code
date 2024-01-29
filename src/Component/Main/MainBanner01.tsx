import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./MainBanner01.css";

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function MainBanner01(): JSX.Element {
  let navigate = useNavigate();
  return (
    <div className="bannerWrap">
      <div className="bannerBox">
        <img src="/kodak/img/banner_01.jpg" alt="배너 01" />
        <div className="bannerTxtWrap">
          <p className="title">
            이월 상품
            <br />
            스페셜 기획전
          </p>
          <Button
            className="sectionVeiwMoreBtn rounded-0 fs-10p fw-bold"
            variant="outline-secondary"
            onClick={() => {
              navigate("/detail/10");
            }}
          >
            VIEW MORE
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default MainBanner01;
