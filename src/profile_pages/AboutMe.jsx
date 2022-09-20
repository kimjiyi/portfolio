/**
 * 애니메이션 작성 - npm i framer-motion 모듈 설치
 * 
*/
import {motion} from 'framer-motion';


const AboutMe = ()=>{
  return(

    // <motion.div>.div는 ul로해도되고 등등으로 컴포넌트를 감싸준다
    // initial - 마운트가 될 때
    // animate - 마운트가 완료된 직후
    // exit - 언마운트가 될 때
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <section>
        <img src="./images/aboutme.png" alt="#" />
      </section>
    </motion.div>
  );
};

export default AboutMe;