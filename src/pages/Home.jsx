import { Link } from "react-router-dom";

const Home = ()=>{
  return(
    <div>
      <h1>홈</h1>
      <p>방문해주셔서 감사합니다</p>


      <p>
        <Link to="/about">About으로 이동</Link> <br />
        <Link to="/articles">게시글로 이동</Link>
      </p>
    </div>
  );
};

export default Home;