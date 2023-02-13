import styles from '../styles/Slide.module.css';

const Slide = ({
  title,
  content,
  src,
  github,
  link
}: {
  title: string;
  content: string;
  src: string;
  github: string;
  link?: string;
}) => {
  return (
    <>
      <div className={styles.videoContainer}>
        <div className={styles.overlay}></div>
        <video preload="none" src={`/videos/${src}`} autoPlay muted loop>
          <p>Seu navegador não suporta vídeos HTML</p>
        </video>
      </div>
      <div className={styles.slideContent}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className={styles.actions}>
          <a href={`https://github.com/vselei/${github}`} target="_blank">
            GitHub
          </a>
          {link && <a href={link} target="_blank">Visitar</a>}
        </div>
      </div>
    </>
  );
};

export default Slide;
