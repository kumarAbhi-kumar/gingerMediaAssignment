import React, { useEffect, useState } from 'react';
import { signup } from '../../api/signup_api';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async() => {
    // You can use formData object here as needed
    console.log(formData);
    const validateSignUp = await signup(formData)
    if(validateSignUp.hasError){
        console.log("Has Error");
    }
    else{
        console.log("Api worked!", validateSignUp);
        navigate('/login')
    }
  };

  useEffect(() => {
    console.log(formData)
  }, [formData])
  return (
    <div>
      <label>Name </label>
      <input type='text' name='name' onChange={handleInputChange}></input>
      <br/>
      <label>Email </label>
      <input type='text' name='email' onChange={handleInputChange}></input>
      <br/>
      <label>Password </label>
      <input type='text' name='password' onChange={handleInputChange}></input>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
