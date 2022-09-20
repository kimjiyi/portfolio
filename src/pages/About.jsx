import { Link } from "react-router-dom";

const About = ()=>{
  return(
    <div>
      <h1>소개</h1>
      <p>웹퍼블리셔, 프론트엔드 개발자를 꿈꾸고 있습니다.</p>

      <p>
        {/* Link는 a태그랑 비슷하지만 결과적으로 a태그는 새로고침버튼이 활성화되면서 바뀌고 link는 활성화하지않고 화면이 바뀐다 
        f12를 눌러 개발자도구에서 확인해보면 html에서는 a태그로 나옴*/}
        <Link to="/">Home으로 이동</Link><br />
        <Link to="/articles">게시글로 이동</Link>
      </p>
    </div>
  );
};

export default About;