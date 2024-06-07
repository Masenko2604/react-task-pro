import { useState } from 'react';
import Button from '../UI/Button/Button.jsx';
import css from './SupportForm.module.css';

const SupportForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <p className={css.question}>Need help</p>
      <input
        type="text"
        name="field1"
        value={formData.field1}
        onChange={handleChange}
      />
      <input
        type="text"
        name="field2"
        value={formData.field2}
        onChange={handleChange}
      />
      <Button icon="icon-plus" text="Send Message" big={true} type="submit" />
    </form>
  );
};

export default SupportForm;
