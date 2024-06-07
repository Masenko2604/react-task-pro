import { useState } from 'react';
import Button from '../UI/Button/Button.jsx';
import ModalWindow from '../UI/ModalWindow/ModalWindow.jsx';

const ModalComponent = ({
  formComponent: FormComponent,
  onSubmit,
  buttonText,
  modalTitle,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  const handleSend = formData => {
    onSubmit(formData);
    setIsVisible(false);
  };

  return (
    <>
      <Button
        icon="icon-plus"
        text={buttonText}
        big={true}
        onClick={handleClick}
      />
      <ModalWindow
        visible={isVisible}
        setVisible={setIsVisible}
        title={modalTitle}
      >
        <FormComponent onSubmit={handleSend} />
      </ModalWindow>
    </>
  );
};

export default ModalComponent;
