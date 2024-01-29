import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./MainReset.css";

import MainSlider from "./MainSlider";
import Section01Best from "./Section01Best";
import Section02Brand from "./Section02Brand";
import MainBanner01 from "./MainBanner01";
import Section03New from "./Section03New";
import Section04Rec from "./Section04Rec";
import Section05Style from "./Section05Style";

export interface SliderProps {
  className?: string;
  dots: boolean;
  fade: boolean;
  arrow: boolean;
  nextArrow: JSX.Element;
  prevArrow: JSX.Element;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean | number;
  autoplaySpeed: number;
  beforeChange: React.FC;
}

function Main(): JSX.Element {
  return (
    <>
      <div id="main">
        <div id="container">
          <MainSlider
            className={undefined}
            dots={false}
            fade={false}
            arrow={false}
            nextArrow={undefined}
            prevArrow={undefined}
            infinite={false}
            speed={0}
            slidesToShow={0}
            slidesToScroll={0}
            autoplay={false}
            autoplaySpeed={0}
            beforeChange={undefined}
          />
          <Section01Best />
          <Section02Brand />
          <Section03New />
          <MainBanner01 />
          <Section04Rec />
          <Section05Style
            dots={false}
            fade={false}
            arrow={false}
            nextArrow={undefined}
            prevArrow={undefined}
            infinite={false}
            speed={0}
            slidesToShow={0}
            slidesToScroll={0}
            autoplay={0}
            autoplaySpeed={0}
            beforeChange={undefined}
          />
        </div>
      </div>
    </>
  );
}

export default Main;
