import { useRef } from "react";

const UserForm = ({ onSubmitUser }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    onSubmitUser({ username, password });
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
          id="password"
          type="password"
          name="password"
        />
      </label>
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
