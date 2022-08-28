// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';

import MyPage from './pages/MyPage';
// import DetailPage from './pages/DetailPage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import NFTMintPage from './pages/NFTMintPage';
// import NotFound from './pages/NotFound'; //optional
// import Footer from './components/Footer'; //optional
// import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <main>
      <header>
        <Header/>
      </header>
      <section>
        <Container className="features">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/main" element={<MainPage />} />
            <Route path = '/writePage' element = {<WritePage />} />
            <Route path = '/mypage' element = {<MyPage />} />
            {/* <Route path = '/detail/:id' element = {<DetailPage />} /> */}
            <Route path = '/signup' element = {<SignUpPage />} />
            <Route path = '/login' element = {<LogInPage />} />
            <Route path = '/mint' element = {<NFTMintPage />} />
            {/* <Route path = '*' element = {<NotFound />} /> */}
          </Routes>
        </Container>
      </section>
      {/* <Footer/> */}
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
