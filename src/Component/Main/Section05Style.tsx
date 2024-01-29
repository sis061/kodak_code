import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import "./Section05Style.css";
import { SliderProps } from "./Main";

import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

import { useState } from "react";

function Section05Style({}: SliderProps): JSX.Element {
  const settings = {
    dots: false,
    fade: false,
    arrow: false,
    nextArrow: <NextArrow onClick={onclick} />,
    prevArrow: <PrevArrow onClick={onclick} />,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  let [items] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className="slide_productlist Section05">
      <div className="tabs">
        <div className="title">
          <div className="sectionTit">코닥 스타일</div>
          <p className="subTit">KODAK STYLE</p>
        </div>
        <div className="SliderWrapper">
          <Slider {...settings}>
            {items.map((ele, index): JSX.Element => {
              return <SliderItem key={index} items={ele} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

interface SliderItemProps {
  items: number;
}

function SliderItem(props: SliderItemProps) {
  let navigate = useNavigate();

  // --Hover Effect 구성--
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = (e: React.MouseEvent): void => {
    setIsHovering(true);
  };

  const handleMouseOut = (e: React.MouseEvent): void => {
    setIsHovering(false);
  };
  return (
    <div>
      <Nav.Link
        onClick={() => {
          navigate("/detail/" + (props.items + 25));
        }}
      >
        <img
          className={isHovering ? "styleImgChg" : ""}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          src={"/kodak/img/section05_00" + props.items + ".jpg"}
          alt={props.items.toString()}
        />
      </Nav.Link>
    </div>
  );
}

// --Slider Arrow Style--

let arrowNextStyle: React.CSSProperties = {
  position: "absolute",
  top: "40%",
  right: "-80px",
  zIndex: "5",
  backgroundImage: "url(/kodak/img/009_next_btn.png)",
  width: "30px",
  height: "90px",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundColor: "transparent",
  cursor: "pointer",
};

let arrowPrevStyle: React.CSSProperties = {
  position: "absolute",
  top: "40%",
  left: "-80px",
  zIndex: "5",
  backgroundImage: "url(/kodak/img/010_prev_btn.png)",
  width: "30px",
  height: "90px",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundColor: "transparent",
  cursor: "pointer",
};

interface ArrowProps {
  onClick: React.FC;
}

function NextArrow(props: ArrowProps): JSX.Element {
  const { onClick } = props;
  return <div onClick={onClick} style={arrowNextStyle}></div>;
}

function PrevArrow(props: ArrowProps): JSX.Element {
  const { onClick } = props;
  return <div onClick={onClick} style={arrowPrevStyle}></div>;
}

export default Section05Style;
