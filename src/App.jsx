/**
 * DO NOT UPDATE
 * This is the main entry point of the application.
 */

import { BrowserRouter } from 'react-router-dom';
import { Router } from './chore/Router';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
