import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../UI/Button/Button.jsx';
import css from './SupportForm.module.css';

const SupportForm = ({ onSubmit }) => {
  const initialValues = {
    field1: '',
    field2: '',
  };

  const validationSchema = Yup.object({
    field1: Yup.string().required('Field 1 is required'),
    field2: Yup.string().required('Field 2 is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form} autoComplete="off">
          <p className={css.question}>Need help</p>
          <div>
            <Field type="text" name="field1" />
            <ErrorMessage name="field1" component="div" className={css.error} />
          </div>
          <div>
            <Field type="text" name="field2" />
            <ErrorMessage name="field2" component="div" className={css.error} />
          </div>
          <Button
            icon="icon-plus"
            text="Send Message"
            big={true}
            type="submit"
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SupportForm;
