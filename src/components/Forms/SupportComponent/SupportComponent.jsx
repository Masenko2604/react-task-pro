import ModalComponent from '../../UI/ModalComponent/ModalComponent.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';

const handleFormSubmit = formData => {
  // Обработка отправки формы
  console.log('Form Data:', formData);
  alert('Message sent');
};

const SupportComponent = () => {
  return (
    <div>
      <ModalComponent
        formComponent={SupportForm}
        onSubmit={handleFormSubmit}
        buttonText="Send Message"
        buttonWidth="200px"
        modalTitle="Support Request"
      />
    </div>
  );
};

export default SupportComponent;
