import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./Header.css";

import { useNavigate, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

function Header(): JSX.Element {
  //   const [chg, setChg] = useState('#0');
  //   const handleInactive = (chg) => {
  //     setChg(chg);
  //   };
  //   useEffect(()=>{
  //     let timer = setTimeout(()=>{ setChg('underline'); }, 100);

  // })
  //     console.log(chg)

  return (
    <div className="header">
      <div className="headerInner clearfix">
        <Logo />
        <GnbWrap />
        <UtilNavTop />
        <UtilNavBottom />
      </div>
    </div>
  );
}

function Logo() {
  let navigate = useNavigate();
  // --ScrollDown -> 헤더 css 변경--
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updateScroll = (): void => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect((): void => {
    window.addEventListener("scroll", updateScroll);
  });

  const scrollTop = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <Nav.Link
      onClick={() => {
        navigate("/");
        scrollTop();
      }}
      className={`bi_wide ${scrollPosition > 100 ? "HeaderLogoChg" : ""}`}
    >
      <img src="/kodak/img/001_bi_symbol.png" alt="#" />
    </Nav.Link>
  );
}

function GnbWrap() {
  let navigate = useNavigate();
  // --ScrollDown -> 헤더 css 변경--
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <div className="gnbWrap">
      <Nav
        className="justify-content-center fw-bold"
        variant="underline"
        defaultActiveKey="#0"
        activeKey=""
        as="ul"
      >
        <Nav.Item className="nav-item" as="li">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
            eventKey="#0"
            className={scrollPosition > 100 ? "HeaderColChg" : ""}
          >
            SHOP
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item" as="li">
          <Nav.Link
            onClick={() => {
              navigate("/detail/0");
            }}
            eventKey="#1"
            className={scrollPosition > 100 ? "HeaderColChg" : ""}
          >
            BEST
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item" as="li">
          <Nav.Link
            onClick={() => {
              navigate("/detail/1");
            }}
            eventKey="#2"
            className={scrollPosition > 100 ? "HeaderColChg" : ""}
          >
            LOOKBOOK
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item" as="li">
          <Nav.Link
            onClick={() => {
              navigate("/detail/2");
            }}
            eventKey="#3"
            className={scrollPosition > 100 ? "HeaderColChg" : ""}
          >
            KODAK STYLE
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item" as="li">
          <Nav.Link
            onClick={() => {
              navigate("/detail/3");
            }}
            eventKey="#4"
            className={scrollPosition > 100 ? "HeaderColChg" : ""}
          >
            OUTLET
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item" as="li">
          <Nav.Link
            onClick={() => {
              navigate("/login");
            }}
            eventKey="#5"
            className={scrollPosition > 100 ? "HeaderColChg" : ""}
          >
            Customer Service
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

function UtilNavTop() {
  let navigate = useNavigate();
  // --ScrollDown -> 헤더 css 변경--
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <div className="utilNavTop">
      <Navbar expand="lg">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" activeKey="" as="ul">
              <Nav.Link
                href="#1"
                onClick={() => {
                  navigate("/login");
                }}
                className={
                  scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig"
                }
                as="li"
              >
                로그인
              </Nav.Link>
              <Nav.Link
                href="#2"
                onClick={() => {
                  navigate("/login");
                }}
                className={
                  scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig"
                }
                as="li"
              >
                회원가입
              </Nav.Link>
              <Nav.Link
                href="#3"
                onClick={() => {
                  navigate("/cart");
                }}
                className={
                  scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig"
                }
                as="li"
              >
                장바구니
              </Nav.Link>
              <Nav.Link
                href="#4"
                className={
                  scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig"
                }
                as="li"
              >
                Q&A
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

function UtilNavBottom() {
  // --ScrollDown -> 헤더 css 변경--
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <div className="utilNavBottom">
      <Link to="#" className="searchBtn">
        <span>
          <img src="/kodak/img/002_search_btn.png" alt="#" />
          Kodak Apparel
        </span>
      </Link>
      <Navbar expand="lg">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" activeKey="" as="ul">
              <Nav.Link
                href="#1"
                className={
                  scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig"
                }
                as="li"
              >
                리뷰
              </Nav.Link>
              <Nav.Link
                href="#2"
                className={
                  scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig"
                }
                as="li"
              >
                기획전
              </Nav.Link>
              <Nav.Link
                href="#3"
                className={
                  scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig"
                }
                as="li"
              >
                이벤트
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
