import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from './authState'; // Make sure to import the authState atom
import { login } from '../../api/login_api';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [auth, setAuth] = useRecoilState(authState);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    console.log(formData);
    const validateLogin = await login(formData);
    if (!validateLogin.hasError) {
      const { access_token, refresh_token } = validateLogin.responseData;
      setAuth({
        accessToken: access_token,
        refreshToken: refresh_token
      });
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);
      console.log("Logged In Successfully!", validateLogin);
      navigate('/home');
    } else {
      console.log(validateLogin.error);
    }
  };

  return (
    <div>
      <label>Email:</label>
      <input type='text' name='email' onChange={handleInputChange}></input>
      <br/>
      <label>Password:</label>
      <input type='password' name='password' onChange={handleInputChange}></input>
      <br/>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};
