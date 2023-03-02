import ProfileImg from './Profile';

import styles from '../styles/Header.module.css';

import { useEffect, useState } from 'react';

const Header = () => {
  const [loc, setLoc] = useState('/');
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

  const handleLinkClick = (e: any, param: string) => {
    e.preventDefault();
    history.pushState(null, '', location.origin + param);
    setLoc(param);
  };

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
            className={!menuIsVisible ? styles.hamburger : styles.cross}
            type="button"
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          <ul
            style={{
              opacity: menuIsVisible ? 1 : 0
            }}
            className="flex"
          >
            <li>
              <a
                onClick={e => handleLinkClick(e, '/')}
                href="/"
                className={loc === '/' ? styles.active : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={e => handleLinkClick(e, '/about-me')}
                href="/about-me"
                className={loc === '/about-me' ? styles.active : ''}
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                onClick={e => handleLinkClick(e, '/skills')}
                href="/skills"
                className={loc === '/skills' ? styles.active : ''}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                onClick={e => handleLinkClick(e, '/projects')}
                href="/projects"
                className={loc === '/projects' ? styles.active : ''}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                onClick={e => handleLinkClick(e, '/contact')}
                href="/contact"
                className={loc === '/contact' ? styles.active : ''}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
