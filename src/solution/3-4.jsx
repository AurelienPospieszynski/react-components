import { useState } from "react";

const UserForm = ({ onSubmitUser }) => {
  const [error, setError] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    onSubmitUser({ username, password });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(null);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form className="vertical-stack form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          value={username}
          onChange={handleUsernameChange}
          id="name"
          type="text"
          name="name"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          value={password}
          onChange={handlePasswordChange}
          id="password"
          type="password"
          name="password"
        />
      </label>
      {error && <p style={{ color: "#e74c3c" }}>{error}</p>}
      <input type="submit" value="Submit" />
    </form>
  );
};

const App = () => {
  const onSubmitUser = (data) => {
    alert("Form submitted: " + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default App;
