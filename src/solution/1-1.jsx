const VariantsStyle = {
  primary: {
    backgroundColor: "#646cff",
  },
  secondary: {
    backgroundColor: "#16a34a",
  },
  default: {
    backgroundColor: "#171717",
  },
};

const SizesVariant = {
  small: {
    padding: "8px 16px",
    fontSize: "1rem",
  },
  large: {
    padding: "12px 24px",
    fontSize: "1.2rem",
  },
};

const Button = ({ variant, size, children }) => {
  const variantStyle = VariantsStyle[variant];
  const sizeStyle = SizesVariant[size];

  return (
    <button
      style={{
        borderRadius: 4,
        border: 0,
        ...variantStyle,
        ...sizeStyle,
      }}
    >
      {children}
    </button>
  );
};

const Demo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginTop: 32,
        alignItems: "center",
        backgroundColor: "var(--bg-color)",
      }}
    >
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
