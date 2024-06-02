import { Routes, Route } from "react-router-dom";
import Home from "./scenes/home/Home";
import LoginPage from "./scenes/login/LoginPage";
import CreateAccountPage from "./scenes/login/CreateAccountPage";
import PasswordResetPage from "./scenes/login/PassswordResetPage";
import ForgotPasswordPage from "./scenes/login/ForgotPasswordPage";
import CheckYourEmailPage from "./scenes/login/CheckYourEmailPage";
import SetNewPasswordPage from "./scenes/login/SetNewPassword";
import Switch from "./components/Switch/Switch";
import CheckIcon from "./components/CheckIcons/CheckIcons";
import MUIRadio from "./components/Radio/RadioButton";


function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isLoggedIn); // TODO: redux implementation
  const isAuthenticated = true;// emulate login
  return (
    <>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <LoginPage />} />   
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
        <Route path="/checkicon" element={<CheckIcon/>} />
      </Routes>    
    </>
  );
}

export default App;