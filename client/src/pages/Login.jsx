// login.jsx
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "./AuthForm.css";

const Login = (props) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  useEffect(() => {
    document.body.classList.add("auth-page");
    return () => {
      document.body.classList.remove("auth-page");
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formData },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <main className="auth-container login-page flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="auth-card login-page">
          <div className="auth-background"></div>
          <h4 className="auth-card-header p-2">Login</h4>
          <div className="auth-card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="auth-form-input"
                  placeholder="Enter Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="auth-form-input"
                  placeholder="Enter Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  className="auth-btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                  disabled={!formData.email || !formData.password}
                >
                  Submit
                </Button>
              </form>
            )}

            {error && (
              <div className="auth-error-message">
                There was an error logging you in
              </div>
            )}

            <div className="white-space">
              <p className="auth-bottom-link">
                Don't have an account?{" "}
                <Link to="/signup" className="login-link">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
