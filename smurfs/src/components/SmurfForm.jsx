import React from "react";
import { Form, Field, withFormik } from "Formik";

const SmurfForm = () => {
  return (
    <Form>
      <label>
        Name:
        <Field type="text" name="name" placeholder="name" />
      </label>
      <label>
        Age:
        <Field type="text" name="age" placeholder="age" />
      </label>
      <label>
        Height:
        <Field type="text" name="height" placeholder="Height" />
      </label>
    </Form>
  );
};

export default SmurfForm;
