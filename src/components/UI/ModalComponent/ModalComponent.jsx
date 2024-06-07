import { useState } from 'react';
import Button from '../Button/Button.jsx';

import ModalWindow from '../ModalWindow/ModalWindow.jsx';

const ModalComponent = ({
  formComponent: FormComponent,
  onSubmit,
  buttonText,
  modalTitle,
  buttonWidth,
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
        width={buttonWidth}
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
