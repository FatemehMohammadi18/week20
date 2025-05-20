import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import api from "../configs/api";
import * as Yup from "yup";

function LoginForm() {
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const LoginSchema = Yup.object({
    username: Yup.string()
      .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد.")
      .max(50, "نام کاربری باید حداکثر 50 کاراکتر باشد.")
      .required("نام کاربری خود را وارد کنید."),
    password: Yup.string()
      .min(5, "رمز عبور باید حداقل 5 کاراکتر باشد.")
      .required("رمز عبور الزامی است."),
  });

  const loginHandler = async (values, { resetForm }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post("/auth/login", values);
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", token);
      console.log(values, token);
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
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={loginHandler}
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
            <button type="submit" disabled={loading}>
              {loading ? "در حال ورود..." : "ورود"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
