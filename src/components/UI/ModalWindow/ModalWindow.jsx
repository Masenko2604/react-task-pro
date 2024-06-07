import css from './ModalWindow.module.css';

const ModalWindow = ({ visible, setVisible, title, children }) => {
  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className={css.modal} onClick={handleClose}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <div className={css.modalHeader}>
          <h2>{title}</h2>
          <span className={css.close} onClick={handleClose}>
            &times;
          </span>
        </div>
        <div className={css.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default ModalWindow;
