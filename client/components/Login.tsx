import React, { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../Context';
// const Heading = ({title}: {title: string}) => <h2>{title}</h2>;

const Login: React.FC<{}> = () => {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const [validCredentials, setValidCredentials] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //TODO: Add fetch request to validate login. If invalid login, setValidCredentials -> false
    console.log('EMAIL IN LOGIN', email);
    setEmail('');
    setPassword('');
  };

  //Sign-up Route
  const routeToSignUp = (e: any) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <>
      <h1>smartER</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="formLine">
          <label className="login-text" htmlFor="email">
            <input
              id="email"
              className="user-input"
              type="text"
              required
              autoComplete="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div className="formLine">
          <label className="login-text" htmlFor="password">
            <input
              className="user-input"
              type="password"
              required
              autoComplete="current-password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        <button type="submit" className="submit" onClick={handleSubmit}>
          Login
        </button>
        {!validCredentials && (
          <div className="small-text">incorrect password/email</div>
        )}
      </form>
      <div className="login-footer">
        Don&apos;t have an Account?{' '}
        <button type="button" className="small-submit" onClick={routeToSignUp}>
          Sign up here!
        </button>
      </div>
    </>
  );
};

export default Login;
