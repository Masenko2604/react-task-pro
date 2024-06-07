import ModalComponent from '../ModalComponent/ModalComponent.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';

const handleFormSubmit = formData => {
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
        modalTitle="Support Request"
      />
    </div>
  );
};

export default SupportComponent;
