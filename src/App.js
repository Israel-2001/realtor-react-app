import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/forgot-password";
import Offers from "./pages/offers";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/profile" element={<PrivateRoute />} >
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/profile" element={<Profile /> } />
          <Route path="/sign-in" element={<SignIn /> } />
          <Route path="/sign-up" element={<SignUp /> } />
          <Route path="/forgot-password" element={<ForgotPassword /> } />
          <Route path="/offers" element={<Offers /> } />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
