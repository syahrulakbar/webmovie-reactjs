const TrailerModal = (props) => {
  return (
    <div style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)" }}>
      <iframe title={props.src} allowFullScreen frameBorder="0" height="315px" src={props.src} width="560px" />
    </div>
  );
};

export default TrailerModal;
