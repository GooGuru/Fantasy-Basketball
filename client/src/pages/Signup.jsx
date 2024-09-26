import { useState } from "react";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <main>
      <div>
        <h1>Signup!</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Your First Name"
            name="firstName"
            type="name"
            value={formState.firstName}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Your Last Name"
            name="lastName"
            type="name"
            value={formState.lastName}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="username"
            name="username"
            type="username"
            value={formState.username}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="email"
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
          <button
            className="btn btn-block btn-info"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
