import { Link } from "react-router-dom";
import "../../App.css";
import "./Floats.css";

function Floats(): JSX.Element {
  const scrollTop = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Link
        to="javascript:;"
        onClick={() => {
          scrollTop();
        }}
        className="float_bn bn_top"
      >
        <img src="/kodak/img/scrollToTop_icon.png" alt="스탬프 버튼" />
      </Link>
      <Link to="javascript:;" className="float_bn bn_stamp">
        <img src="/kodak/img/check.png" alt="스탬프 버튼" />
      </Link>
      <Link to="javascript:;" className="float_bn bn_kakaoplus">
        <img src="/kodak/img/kakaoplus.png" alt="카카오플러스 버튼" />
      </Link>
    </>
  );
}

export default Floats;
