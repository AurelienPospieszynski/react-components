import { useRef, useState } from "react";

const UserForm = ({ onSubmitUser }) => {
  const [error, setError] = useState(null);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    onSubmitUser({ username, password });
  };

  const handlePasswordChange = () => {
    setError(null);
  };

  return (
    <form className="vertical-stack form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input ref={usernameRef} id="name" type="text" name="name" />
      </label>
      <label htmlFor="password">
        Password
        <input
          ref={passwordRef}
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
