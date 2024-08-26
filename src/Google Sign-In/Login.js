import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './Login.css';

const clientId = 'YOUR_GOOGLE_CLIENT_ID';

function Login() {
  const onSuccess = (response) => {
    console.log('Login Success:', response);
    // Redirect to OneBox screen here
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
}

export default Login;
