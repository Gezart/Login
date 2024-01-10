import React, { useState } from 'react'

const Login = ({users, onLogin}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === email);
    if (user) {
      if (user.password === password) {
        console.log('Login successful');

        localStorage.setItem('loggedInUser', JSON.stringify({ id: user.id, username: user.username }));
        localStorage.setItem('token', user.token);

        onLogin({ id: user.id, username: user.username, token: user.token });

      } else {
        console.log('Incorrect password');
      }
    } else {
      console.log('User not found');
    }

  }

  return (
    <form className='login' onSubmit={handleLogin}>
        <input type="text" placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}}/> 
        <input type="password" placeholder='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login