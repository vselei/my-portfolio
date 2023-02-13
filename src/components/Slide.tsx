import styles from '../styles/Slide.module.css';

const Slide = ({
  title,
  content,
  src
}: {
  title: string;
  content: string;
  src: string;
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
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Slide;
