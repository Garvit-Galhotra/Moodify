import { useState } from "react";
import Form from "../components/Form";
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

    await handleRegister(email, password, username);
    navigate("/");
  }

  return (
    <main className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <Form
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="username"
          placeholder="Enter username"
        />
        <Form
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          placeholder="Enter Email"
        />
        <Form
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          placeholder="Enter Password"
        />
        <button className="button primary-button">Register</button>
        <p>
          Have an account <Link to="/login">Login Here</Link>.
        </p>
      </form>
    </main>
  );
};

export default Login;
