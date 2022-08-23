import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
// // import WritePage from './pages/WritePage';
// import MyPage from './pages/MyPage';
// import DetailPage from './pages/DetailPage';
// import SignUpPage from './pages/SignUpPage';
// import NFTmintPage from './pages/NFTmintPage';
// import NotFound from './pages/NotFound'; //optional

import Header from "./components/Header";
//import Footer from './components/Footer'; //optional

function App() {
  return (
    <BrowserRouter>
      {<Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path = '/write' element = {<WritePage />} /> */}
        {/* <Route path = '/mypage' element = {<MyPage />} /> */}
        {/* <Route path = '/detail/:id' element = {<DetailPage />} /> */}
        {/* <Route path = '/signup' element = {<SignUpPage />} /> */}
        {/* <Route path = '/nftmint' element = {<NFTmintPage />} /> */}
        {/* <Route path = '*' element = {<NotFound />} /> */}
      </Routes>
      {/* {<Footer /> } */}
    </BrowserRouter>
  );
}

export default App;
