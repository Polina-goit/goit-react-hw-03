import React from "react";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      ...values,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} placeholder="Name"></Field>
        <ErrorMessage name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field
          type="text"
          name="number"
          id={numberId}
          placeholder="xxx-xx-xx"
        ></Field>
        <ErrorMessage name="number" component="span" />
        <button type="submit"> Add contact </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
