import { useEffect, useState } from 'react';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.info} flex`}>
          <div className={styles.footerContact}>
            <h2>Informações de Contato</h2>
            <address>
              <p>
                <span className={styles.highlight}>E-mail:</span>{' '}
                <a href="mailto:vsennaselei@gmail.com">vsennaselei@gmail.com</a>
              </p>
              <p>
                <span className={styles.highlight}>Tel:</span>{' '}
                <a href="tel:5521993966088">21 99396-6088</a>
              </p>
              <p>Rio de Janeiro, RJ</p>
            </address>
          </div>
          <div className={styles.footerSocial}>
            <h2>Redes Sociais</h2>
            <a className={styles.footerSingleSocial}>
              GitHub
            </a>
            <a className={styles.footerSingleSocial}>
              WhatsApp
            </a>
          </div>
        </div>
        <small>© {year} Victor Seleimend, todos os direitos reservados</small>
      </div>
    </footer>
  );
};

export default Footer;
