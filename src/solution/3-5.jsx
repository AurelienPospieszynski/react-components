import { useForm } from "react-hook-form";

const UserForm = ({ onSubmitUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="vertical-stack form" onSubmit={handleSubmit(onSubmitUser)}>
      <label htmlFor="name">
        Name
        <input {...register("username")} id="name" type="text" name="name" />
      </label>
      <label htmlFor="password">
        Password
        <input
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            required: "Password is required !",
          })}
          id="password"
          type="password"
          name="password"
        />
      </label>
      {errors.password && (
        <p style={{ color: "#e74c3c" }}>{errors.password.message}</p>
      )}
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
