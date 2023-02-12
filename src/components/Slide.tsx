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
      <video
        src={`/videos/${src}`}
        autoPlay
        muted
        className={styles.video}
      ></video>
      <div className={styles.slideContent}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Slide;
