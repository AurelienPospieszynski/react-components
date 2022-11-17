import clsx from "clsx";

const Button = ({ variant = "primary", size = "large", children }) => {
  return (
    <button
      className={clsx(
        "rounded",
        {
          "bg-[#646cff]": variant === "primary",
          "bg-green-600": variant === "secondary",
          "bg-black": variant === "default",
        },
        {
          "py-2 px-3 text-base": size === "small",
          "py-3 px-6 text-lg": size === "large",
        }
      )}
    >
      {children}
    </button>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col gap-2 mt-8 items-center bg-neutral-800">
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
