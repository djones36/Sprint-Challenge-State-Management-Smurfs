import React from "react";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { sendSmurftoThePromiseLand } from "../actions";

const SmurfForm = (props, { values, handleSubmit, status }) => {
  return (
    <Form>
      <label>
        Name:
        <Field type="text" name="name" placeholder="name" />
      </label>
      <label>
        Age:
        <Field type="number" name="age" placeholder="age" />
      </label>
      <label>
        Height:
        <Field type="number" name="height" placeholder="Height" />
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
  },
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    props.sendSmurftoThePromiseLand(values);
    resetForm("");
    setSubmitting(false);
  }
})(SmurfForm);

const mapStateToProps = state => {
  return {
    smurf: state.smurf
  };
};

export default connect(
  mapStateToProps,
  { sendSmurftoThePromiseLand }
)(FormikSmurfForm);
