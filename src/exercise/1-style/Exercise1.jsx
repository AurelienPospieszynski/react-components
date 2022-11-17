import clsx from 'clsx';

const Button = ({ variant = 'primary', size = 'large', children }) => {
  return (
    <button
      className={clsx(
        'border-0',
        'rounded',
        {
          'bg-orange-600/50 hover:bg-orange-400': variant === 'primary',
          'text-slate-400 hover:text-sky-400 hover:underline':
            variant === 'primary',
          'bg-amber-300': variant === 'secondary',
          'bg-lime-600': variant === 'default',
        },
        {
          'py-2 px-3 text-base': size === 'small',
          'py-3 px-6 text-lg': size === 'large',
        }
      )}
    >
      {children}
    </button>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Button variant="primary" size="small">
        Primary small
      </Button>
      <Button variant="secondary" size="small">
        Secondary small
      </Button>
      <Button variant="default" size="small">
        Default small
      </Button>
      <Button variant="primary" size="large">
        Primary large
      </Button>
      <Button variant="secondary" size="large">
        Secondary large
      </Button>
      <Button variant="default" size="large">
        Default large
      </Button>
    </div>
  );
};

const App = () => {
  return (
    <div className="remove-global-styles">
      <Demo />
    </div>
  );
};

export default App;
