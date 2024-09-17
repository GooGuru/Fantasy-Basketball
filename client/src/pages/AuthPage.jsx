import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Go to Signup' : 'Go to Login'}
      </button>
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthPage
