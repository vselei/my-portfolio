const Slide = ({ title, content }: { title: string; content: string }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
    </>
  );
};

export default Slide;
