import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import users from './users'; // Assuming you've imported the users array

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')));
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [formType, setFormType] = useState("login")

  console.log(users);

  const handleLogin = (userInfo) => {
    setLoggedInUser(userInfo);
    setToken(userInfo.token);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('token');
    setLoggedInUser(null);
    setToken(null);
  };  


  const handleRegister = (newUser) => {
    users.push(newUser);

    console.log('User registered:', newUser);
  };


  return (
    <div className="App">
      <header className="App-header">

        {loggedInUser ? (
          <>
            <p>Welcome, {loggedInUser.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <header className="App-header">
              <button onClick={() => setFormType("login")}>Login</button>
              <button onClick={() => setFormType("register")}>Register</button>
            </header>
            {
              formType == "login" ? <Login users={users}  onLogin={handleLogin}/> : <Register onRegister={handleRegister}/>
            }
          </>
        )}
      </header>
      <main>
      </main>
    </div>
  );
};

export default App;
