import ProfileImg from './Profile';

import styles from '../styles/Header.module.css';

import { useEffect, useState } from 'react';

const Header = ({ path }: { path: string }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(
    window.innerWidth > 768 ? true : false
  );
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);

  useEffect(() => {
    const scrollDetect = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', scrollDetect);

    return () => {
      window.removeEventListener('scroll', scrollDetect);
    };
  }, []);

  return (
    <header
      style={{
        background:
          scroll > 1 ? 'linear-gradient(to left, #d7d7d7, #f5f5f5)' : '',
        boxShadow: scroll > 1 ? '1px 1px 5px #adadad34' : ''
      }}
    >
      <div className="container flex space-between align-center">
        <ProfileImg />
        <nav className={styles.menu}>
          <button
            onClick={() => setMenuIsVisible(!menuIsVisible)}
            className={styles.hamburger}
            type="button"
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
          {menuIsVisible && (
            <ul className='flex'>
              <li>
                <a href="/" className={path === '/' ? styles.active : ''}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-me"
                  className={path === '/about-me' ? styles.active : ''}
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  href="/skills"
                  className={path === '/skills' ? styles.active : ''}
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className={path === '/projects' ? styles.active : ''}
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={path === '/contact' ? styles.active : ''}
                >
                  Contato
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
