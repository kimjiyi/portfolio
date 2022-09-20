import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

const App = ()=>{
  return(
    // 라우터를 적용할 때는 가장 최상단에 BrowserRouter 컴포넌트로 감싸야 한다.
    <BrowserRouter>      
      
      <Routes>
        {/* 공통 레이아웃 컴포넌트 역할 */}
        <Route element={<Layout />}>
          {/* index는 path="/"과 동일한 의미 */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />


          {/* 중첩(서브) 라우팅 - 공통 레이아웃의 작성 원리 */}
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />  
          </Route>


          {/* 별표(*)는 모든페이지를 의미 */}
          {/* 낫파운드는 무조건 가장밑에 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;