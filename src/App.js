import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import ForgotPassword from "./pages/forgot-password";
import Offers from "./pages/offers";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <Header path="/header" element={<Header /> } />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/offers" element={<Offers /> } />
          <Route path="/sign-in" element={<SignIn /> } />
          <Route path="/sign-up" element={<SignUp /> } />
          <Route path="/forgot-password" element={<ForgotPassword /> } />
          <Route path="/profile" element={<Profile /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
