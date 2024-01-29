import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./Component/Common/Header";
import Main from "./Component/Main/Main";
import Footer from "./Component/Common/Footer";
import Detail from "./Component/Sub/Detail";
import Cart from "./Component/Sub/Cart";
import NotFound from "./Component/Sub/NotFound";
import Login from "./Component/Sub/Login";
import Floats from "./Component/Common/Floats";

import data from "./data/data";

export interface Data {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  imgUrlSub: string;
  imgUrlDetail1: string;
  imgUrlDetail2: string;
  imgUrlDetail3: string;
  imgUrlDetail4: string;
  imgUrlDetail5: string | undefined | null;
  imgUrlDetailCleaning: string;
  alt: string;
}

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Floats />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail items={data} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
