import ProfileImg from './Profile';

import styles from '../styles/Header.module.css';

const Header = ({ path }) => {
  return (
    <header>
      <div className="container flex space-between align-center">
        <ProfileImg />
        <nav className={styles.menu}>
          <ul className={`${styles.desktop} flex`}>
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
              <a href="/skills" className={path === '/skills' ? styles.active : ''}>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
