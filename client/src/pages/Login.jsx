import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LoggedIn_User } from "../utils/mutations";

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, data ] = useMutation(LoggedIn_User);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState  ({
            ...formState,
            [name]: value,
        });
    };


const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(formState);
  try{
    const { data } = await login({
        variables: { ...formState },
    });

    Auth.login(data.login.token);
  } catch (e) {
    console.error(e);
  }

  setFormState({
    email: '',
    password: '',
  });
};

  return (
    <div>
      <h1>Login</h1>
      <div>
        {data ? (
            <Link to= './team'></Link>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            {/* <Link to="/team" > */}
            <button
              className="btn btn-block btn-info"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </button>
            {/* </Link> */}
            <Link to= "/signup">
            <button>
                Signup
            </button></Link>
            
          </form>
         )} 
      </div>
      </div>
   )   
};

export default Login;
