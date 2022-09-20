import {useParams} from 'react-router-dom';

const Article = ()=>{
  
  // const paramData = useParams();
  // console.log(paramData.id);
  // const id = paramData.id;

  const {id} = useParams();

  return(
    <section>
      <h2>게시글 {id}번 제목</h2>
      <p>
      거친 인류의 기쁘며, 곧 그들에게 방지하는 같으며, 사막이다. 사랑의 옷을 인생의 뛰노는 그들의 무엇을 봄날의 놀이 천지는 그리하였는가? 우리는 없으면 전인 그러므로 그들은 너의 그들에게 생생하며, 약동하다. 공자는 능히 귀는 아니한 반짝이는 그들은 안고, 주며, 것이다. 위하여, 이것이야말로 봄날의 무엇이 말이다. 피어나기 착목한는 발휘하기 예가 청춘의 인도하겠다는 있는 뿐이다. 새가 사람은 끝까지 실현에 따뜻한 천하를 찬미를 이상이 가진 봄바람이다. 우리의 붙잡아 오아이스도 이상 구하지 것은 봄바람을 그들에게 피다. 위하여, 그들에게 설산에서 뼈 하였으며, 할지라도 물방아 우리의 꽃이 사막이다. 군영과 얼마나 위하여 청춘의 자신과 기관과 석가는 이상의 것이다. 천하를 더운지라 유소년에게서 봄날의 그리하였는가?
      </p>
    </section>
  );
};

export default Article;