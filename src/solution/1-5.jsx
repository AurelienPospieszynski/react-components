import styled from 'styled-components';

const BackgroundVariants = {
  primary: '#007bff',
  secondary: '#16a34a',
  default: '#171717',
};

const Button = styled.button(
  {
    border: 0,
    borderRadius: 4,
  },
  {
    backgroundColor: (props) => BackgroundVariants[props.variant],
  },
  {
    padding: (props) => (props.size === 'small' ? '8px 16px' : '12px 24px'),
    fontSize: (props) => (props.size === 'small' ? '1rem' : '1.2rem'),
  }
);

const DemoContainer = styled.div({
  backgroundColor: 'var(--bg-color)',
  marginTop: 32,
  gap: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Demo = () => {
  return (
    <DemoContainer>
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
    </DemoContainer>
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
