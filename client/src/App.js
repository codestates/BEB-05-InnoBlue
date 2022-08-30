// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';

import MyPage from './pages/MyPage';
import ReadPost from './pages/ReadPost';
import DetailPage from './pages/DetailPage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import NFTMintPage from './pages/NFTMintPage';
import NFTMarketPage from './pages/NFTMarketPage';
import NFTDetailPage from './pages/NFTDetailPage';

// import NotFound from './pages/NotFound'; //optional
import Footer from './components/Footer'; //optional
// import Home from "./components/Home";


function App() {
  // 로그인 상태 관리
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem("email") === null ) { // sessiongStorge에 저장된 email 값이 없다면
      console.log('isLogin ?? :: ', isLogin);
    } else { // sessiongStorge에 저장된 email 값이 있다면
      setLogin(true)
      console.log('isLogin ?? :: ', isLogin);
    }
  })

  return (
    <BrowserRouter>
    <div className="App backImage">
      <main>
      <header>
        <Header  isLogin={isLogin} />
      </header>
      <section>
        <Container className="features">
          <Routes>
            <Route path = '/' element = {<MainPage isLogin={isLogin} />} />
            <Route path = '/writepage' element = {<WritePage isLogin={isLogin} />} />

            <Route path = '/mypage' element = {<MyPage isLogin={isLogin}/>} />
            {/* <Route path = '/detail/:id' element = {<DetailPage />} /> */}

            <Route path = '/readpost/:id' element = {<ReadPost isLogin={isLogin} />} />
            <Route path = '/signup' element = {<SignUpPage />} />
            <Route path = '/login' element = {<LogInPage isLogin={isLogin} />} />
            <Route path = '/mint' element = {<NFTMintPage isLogin={isLogin}/>} />
            <Route path = '/market' element = {<NFTMarketPage />} />
            <Route path = '/nft/:tokenId' element = {<NFTDetailPage isLogin={isLogin}/>} />
            {/* <Route path = '*' element = {<NotFound />} /> */}
          </Routes>
        </Container>
      </section>
      <Footer/>
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;