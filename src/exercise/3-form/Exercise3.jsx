import { useForm } from 'react-hook-form';

const UserForm = ({ onSubmitUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(isSubmitSuccessful);
  return (
    <form className="vertical-stack form" onSubmit={handleSubmit(onSubmitUser)}>
      <label htmlFor="name">
        Name
        <input type="text" {...register('name')} />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message:
                'Votre mot de passe est au mauvais format et doit faire au moins 8 caracsf',
            },
          })}
        />
      </label>
      {errors.password ? (
        <p style={{ color: 'red' }}>{errors.password.message}</p>
      ) : null}
      {/* {isSubmitSuccessful ? (
        <p style={{ color: 'green' }}>
          Votre mot de passe a bien ete enregistre
        </p>
      ) : null} */}

      <input type="submit" value="Submit" />
    </form>
  );
};

const App = () => {
  const onSubmitUser = (data) => {
    alert('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default App;
