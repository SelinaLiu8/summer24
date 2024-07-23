import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Login from './components/auth/login/Login'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" component={<Home/>} />
        {/* <Route path="/login" component={<Login/>} /> */}
        {/* Add other routes here */}
      </Routes>
    </>
  );
}

export default App;
