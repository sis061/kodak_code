import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import './Footer.css';

import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer():JSX.Element {
    return (
        <div className='footer clearfix'>
            <Container>
                <Row>
                    <div className="footerLeft col sm=4.5 ">
                        <img src='/kodak/img/footer_bi.png' className='footerLogo' alt='footerLogo'/>
                        <p className="bold">주식회사 하이라이트브랜즈</p>
                        <br />

                        <p>CEO. Jun Kwon Lee</p>
                        <p>Business License No. 788-81-01239 [사업자정보확인]</p>
                        <p>Mail Order Business Registration. No. 2019-성남분당B-0523</p>
                        <p>Address. 801 PDC Building A-Dong 8F, 242, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi, Korea</p>
                        <br />

                        <p>Hilight Brands is a division within Modern Works.</p>
                        <p>The Kodak trademark, logo and trade dress are</p>
                        <p>used by Modern Works under license from Eastman Kodak Company.</p>
                        <br />

                        <p>ⓒ 2023 Hilight Brands.</p>
                    </div>

                    <div className="footerRight col sm=5.5 row">
                        <div style={{ width: '20%' }}>
                            <ul>
                                <li>
                                    <Link to={' '}>
                                        Term of Use
                                    </Link>
                                </li>
                                <li>
                                    <Link to={' '}>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to={' '}>
                                        Order Tracking
                                    </Link>
                                </li>
                                <li>
                                    <Link to={' '}>
                                        Notice
                                    </Link>
                                </li>
                                <li>
                                    <Link to={' '}>
                                        Q&A
                                    </Link>
                                </li>
                                <li>
                                    <Link to={' '}>
                                        인재채용
                                    </Link>
                                </li>
                                <li>
                                    <br/>
                                </li>
                                <li style={{ float: 'left' }}>
                                    <Link to={' '} className='socialBtn'>
                                        <img src='/kodak/img/new_kakaoplus.png' alt='카카오플러스 링크'/>
                                    </Link>
                                    <Link to={' '} className='socialBtn'>
                                        <img src='/kodak/img/new_facebook.png' alt='페이스북 링크'/>
                                    </Link>
                                    <Link to={' '} className='socialBtn'>
                                        <img src='/kodak/img/new_instagram.png' alt='인스타그램 링크'/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div style={{ width: '35%' }}>
                            <p>CS Center</p>
                            <p>Mon - Fri (10:00 - 17:00)</p>
                            <p>문의전용 : support@hibs.co.kr</p>
                            <p>마케팅제휴 : marketing@hibs.co.kr</p>
                        </div>
                        <div style={{ width: '45%', fontWeight:'600'}}>
                            <p>반품 & 교환</p>
                            <p>반품배송지 : 경기도 안산시 단원구 시화호수로 835 로지스밸리 3층</p>
                            <br/>

                            <p>계좌 안내</p>
                            <p>계좌번호 : 하나은행 439-910024-02604 </p>
                            <p>예금주 : 주식회사 하이라이트브랜즈</p>
                            <br/>

                            <p>매장 안내</p>
                            <p><Link to={' '}>전국 매장정보</Link></p>
                            <p>대리점 입점 문의 : hyoungwon.son@hibs.co.kr (010-2515-1632)</p>
                            <br/>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
};

export default Footer