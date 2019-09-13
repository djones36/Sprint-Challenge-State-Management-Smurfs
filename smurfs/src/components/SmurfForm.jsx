import React from "react";
import { Form, Field, withFormik } from "formik";

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
      <button type="submit">Create New Smurf</button>
    </Form>
  );
};

const FormikSmurfForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  }
})(SmurfForm);

export default FormikSmurfForm;
