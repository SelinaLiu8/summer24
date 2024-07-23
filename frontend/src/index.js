import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/authContext/index';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import Home from './pages/Home'
import Header from './components/header/Header';

const withHeader = (Component) => {
  return (props) => (
    <>
      <Header/>
      <Component {...props} />
    </>
  )
}

const basePath = '/'

const router = createBrowserRouter([
  {
    path : basePath,
    element : React.createElement(withHeader(Home))
  },
  {
    path : basePath + 'login',
    element : <Login />,
  },
  {
    path : basePath + 'register',
    element : <Register />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router={router}>
        <React.StrictMode>
          <App />
      </React.StrictMode>
    </RouterProvider>
  </AuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
