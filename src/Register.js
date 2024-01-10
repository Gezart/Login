import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const generateUniqueId = () => new Date().getTime();

    const newUser = {
      id: generateUniqueId(),
      username: fullName, 
      password: password,
      email: email,
      token: generateToken(),
    };

    onRegister(newUser);
  };

  const generateToken = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  return (
    <form className='register' onSubmit={handleRegister}>
      <input
        type='text'
        placeholder='Full Name'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="text"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Register</button>
    </form>
  );
};

export default Register;
