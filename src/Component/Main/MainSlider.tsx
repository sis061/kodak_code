import "bootstrap/dist/css/bootstrap.min.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderProps } from "./Main";

import "../../App.css";
import "./MainSlider.css";

import { Nav } from "react-bootstrap";

import { useState } from "react";
// eslint-disable-next-line
function MainSlider({}: SliderProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  let [items] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const settings = {
    dots: false,
    fade: false,
    arrow: false,
    nextArrow: <NextArrow onClick={onclick} />,
    prevArrow: <PrevArrow onClick={onclick} />,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, newIndex) => {
      setCurrentIndex(newIndex);
    },
  };

  return (
    <div className="main_slider">
      <Slider {...settings}>
        {items.map((ele, index): JSX.Element => {
          return <SliderItem key={index} items={items[index]} />;
        })}
      </Slider>
      <div className="carousel_pagnation_wrap">
        <span className="carousel_pagnation">{currentIndex + 1}/6</span>
      </div>
    </div>
  );
}

interface SliderItemProps {
  items: number;
}

function SliderItem(props: SliderItemProps): JSX.Element {
  return (
    <div className={"main_slider_carousel carousel-" + props.items}>
      <Nav.Link href="/home"></Nav.Link>
    </div>
  );
}

// --Slider Arrow Style--

let arrowNextStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  right: "15px",
  zIndex: "5",
  backgroundImage: "url(/kodak/img/009_next_btn.png)",
  width: "20px",
  height: "50px",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundColor: "transparent",
  cursor: "pointer",
};

let arrowPrevStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "15px",
  zIndex: "5",
  backgroundImage: "url(/kodak/img/010_prev_btn.png)",
  width: "20px",
  height: "50px",
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

export default MainSlider;
