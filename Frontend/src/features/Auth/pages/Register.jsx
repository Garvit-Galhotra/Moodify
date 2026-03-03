import { useState } from "react";
import FormGroup from "../components/FromGroup";
import "../styles/form.scss";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { handleRegister } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister(username, email, password);
    navigate("/");
  }

  return (
    <main className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <FormGroup
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          label="username"
          placeholder="Enter Username"
        />
        <FormGroup
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          label="email"
          placeholder="Enter Email"
        />
        <FormGroup
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label="password"
          placeholder="Enter Password"
        />
        <button className="button primary-button">Register</button>
        <p>
          Already Have an account <Link to="/login">Login Here.</Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
