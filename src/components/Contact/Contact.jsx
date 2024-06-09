import React, { useEffect } from 'react';
import styles from './Styles/Contact.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import contactImg from "../../assets/images/contact.png";

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

const ContactForm = () => {
  return (
    <div className={styles['contact-form-container']}>
        <h2>GET <span className={styles['highlight']}>IN</span> TOUCH</h2>
        <div className={styles.bottom_line}></div>
      <div className={styles['form-section']}>
        <form>
          <div className={styles['form-group']}>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className={styles['form-group']}>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className={styles['form-group']}>
            <textarea name="message" placeholder="Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
         <div className={styles['image-section']}>
            <div className={styles['backCircle']}></div>
            <AnimatedBox direction="right">
          <img src={contactImg} alt="To Fed" />
          </AnimatedBox>
          <div className={styles['circle']}></div>
       </div> 
      </div>
      
    </div>
  );
};

export default ContactForm;
