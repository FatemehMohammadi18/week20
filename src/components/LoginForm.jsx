import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import api from "../configs/api";

function LoginForm() {
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

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
