import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './styles/About.scss';

const getBoxVariant = (direction) => {
  return {
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 }
  };
};

const AnimatedBox = ({ children, direction }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={getBoxVariant(direction)}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  return (
    <div className='container'>
      <p className='head'>ABOUT <span>US</span></p>
      <AnimatedBox direction="right">
        <div className="box1 boxflex">
          <img className='whyfedimg' src="https://uploads-ssl.webflow.com/663d299655b46de106de40d7/665730072a5e426c487dd8da_Frame%201000001327.svg" alt="" />
          <div className="whyfed box">
              <p className='boxhead'><span>Why</span> one should Join FED?</p>
              <p>We aim to nurture entrepreneurship through</p>
              <p>creative, authentic, and efficient techniques.</p>
          </div>
        </div>
      </AnimatedBox>
      <AnimatedBox direction="left">
        <div className="box2 boxflex">
          <img className='howfedimg' src="https://uploads-ssl.webflow.com/663d299655b46de106de40d7/6657309f141df2159c9ffd32_vecteezy_3d-masculino-personaje-brazo-cruzado_24387905%202%20(1).svg" alt="" />
          <div className="howfed box">
              <p className='boxhead'><span>How</span> we are still on top?</p>
              <p>Strong co-operation between members that our</p>
              <p>organisation instills is how we can accomplish all of this.</p>
          </div>
        </div>
      </AnimatedBox>
      <AnimatedBox direction="right">
        <div className="box3 boxflex">
          <img className='whatfedimg' src="https://uploads-ssl.webflow.com/663d299655b46de106de40d7/66573007b67d2331b166edba_image%20526.svg" alt="" />
          <div className="whatfed box">
              <p className='boxhead'><span>What</span> we do in FED?</p>
              <p>Through our social media handles, we arrange</p>
              <p>informative podcasts, high-quality events and </p>
              <p>inspiring thought-provoking material.</p>
          </div>
        </div>
      </AnimatedBox>
    </div>
  );
}
