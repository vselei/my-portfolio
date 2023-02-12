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
      <div className={styles.imgContainer}>
        <div className={styles.overlay}></div>
        <img src={`/slides/${src}`} alt={`Projeto ${title}`} />
      </div>
      <div className={styles.slideContent}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Slide;
