import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { FormDiv, InputDiv, Form } from './styles';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="hero" role="img" aria-label="">
    <div class="hero-inner">
      <FormDiv>
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h4>Signup</h4>
      <Form onSubmit={handleFormSubmit}>
        <InputDiv>
          <label htmlFor="firstName">First Name:</label>
          <input
            className="validate"
            name="firstName"
            type="text"
            id="firstName"
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
          className="validate"
            name="lastName"
            type="text"
            id="lastName"
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
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
          <button type="submit">Submit</button>
      </Form>
    </div>
    </FormDiv>
    </div>
    </div>
  );
}

export default Signup;
