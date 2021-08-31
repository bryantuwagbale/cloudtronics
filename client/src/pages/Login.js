import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/dist/mutations';
import Auth from '../utils/auth';
import { FormDiv, Form, InputDiv } from './styles';
import 'materialize-css/dist/css/materialize.min.css';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="hero" role="img" aria-label="">
    <div className="hero-inner">
    <FormDiv>
    <div className="container">
      <Link to="/signup">← Go to Signup</Link>

      <h4>Login</h4>
      <Form onSubmit={handleFormSubmit}>
      <InputDiv>
          <label htmlFor="email">Email address:</label>
          <input
            className="validate" 
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <label htmlFor="pwd">Password:</label>
          <input
            className="validate"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
         </InputDiv>
       
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
          <button type="submit">Submit</button>
      </Form>
    </div>
    </FormDiv>
    </div>
    </div>
  );
}

export default Login;
