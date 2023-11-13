import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}


export default App;
