import { useEffect, useState } from 'react';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className="container">
          <address className={styles.footerContent}>
            <h2 className="heading-two uppercase">Victor Seleimend</h2>
            <p className="uppercase">
              <span className={styles.highlight}>Email: </span>
              <a href="mailto:vsennaselei@gmail.com">vsennaselei@gmail.com</a>
            </p>
            <p className="uppercase">
              <span className={styles.highlight}>Tel: </span>
              <a href="tel:5521993966088">21 99396-6088</a>
            </p>
            <p className='uppercase'>Rio de Janeiro, RJ</p>
            <a
              className={`${styles.wppBtn} cta uppercase`}
              href="https://wa.me/5521993966088"
            >
              Me chame no whats
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
