import React from 'react';
import Home from './Home';
import { ClickProvider } from './ClickContext';


function App() {
  return (
    <ClickProvider>
      <Home />
    </ClickProvider>
  );

}

export default App;