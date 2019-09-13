import React from "react";
import { Form, Field, withFormik } from "Formik";

const SmurfForm = () => {
  return (
    <Form>
      <label>
        Name:
        <Field />
      </label>
      <label>
        Age:
        <Field />
      </label>
      <label>
        Height:
        <Field />
      </label>
    </Form>
  );
};

export default SmurfForm;
