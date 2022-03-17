const Modal = ({ message, onClose, close }) => {
  if (!close) return false;
  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <h2>{message}</h2>
        <button className="close" onClick={onClose}>
          X
        </button>
      </div>
    </>
  );
};

export default Modal;
