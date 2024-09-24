import React from 'react';

const handleFormSubmit = async (event) => {
     event.preventDefault();
    };

const Login = () => {
return (
  <div> 
    <h1>Login</h1>
    <form onSubmit={handleFormSubmit}>
        <input 
            className="form-input"
            placeholder="Your Username"
            name= "username"
            type= "username"
        />
        <input
         className="form-input"
         placeholder="******"
         name="password"
         type="password"
        />
        <button
            className= "btn btn-block btn-info"
            style={{ cursor: 'pointer' }}
            type= "submit"
            >
            Submit
        </button>
    </form>
 </div>
);
};


export default Login;