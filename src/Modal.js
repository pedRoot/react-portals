const Modal = ({ message, onClose }) => {
  return (
    <>
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
