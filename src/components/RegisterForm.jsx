import React, { useState } from "react";
import api from "../configs/api";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function RegisterForm() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const RegisterSchema = Yup.object({
    username: Yup.string()
      .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد.")
      .max(50, "نام کاربری باید حداکثر 50 کاراکتر باشد.")
      .required("نام کاربری الزامی است."),
    password: Yup.string()
      .min(5, "رمز عبور باید حداقل 5 کاراکتر باشد.")
      .required("رمز عبور الزامی است."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "رمزهای عبور یکسان نیستند.")
      .required("تکرار رمز عبور الزامی است."),
  });

  const registerHandler = async (values, { resetForm }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post("/auth/register", values);
      console.log(response);
      resetForm();
    } catch (error) {
      setError(error.response?.data?.message || "خطایی رخ داده است.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Formik
        initialValues={{ username: "", password: "", confirmPassword: "" }}
        validationSchema={RegisterSchema}
        onSubmit={registerHandler}
      >
        {() => (
          <Form>
            <Field type="text" name="username" placeholder="نام کاربری" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
            <Field type="password" name="password" placeholder="رمز عبور" />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="تکرار رمز عبور"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              style={{ color: "red" }}
            />
            <button type="submit" disabled={loading}>
              {loading ? "در حال ثبت نام..." : "ثبت نام"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
