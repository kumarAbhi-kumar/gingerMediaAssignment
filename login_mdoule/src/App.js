import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/home/home';
import { routes } from './approutes.js';
import { Login } from './Pages/login/login';
import { SecureRoute } from './Pages/home/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
