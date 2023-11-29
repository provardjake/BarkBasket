import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './AuthForm.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="auth-container flex-row justify-center mb-4">
    <div className="col-12 col-lg-10">
      <div className="auth-card">
        <div className="auth-background"></div>
        <h4 className="auth-card-header p-2">Signup</h4>
        <div className="auth-card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="auth-form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  className="auth-form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="auth-form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  className="auth-btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                  disabled={!formData.username || !formData.email || !formData.password}
                >
                  Submit
                </Button>
              </form>
            )}

            {error && (
              <div className="auth-error-message">
                There Was an error with your Sign up
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
