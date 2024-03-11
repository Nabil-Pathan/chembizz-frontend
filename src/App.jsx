import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import OtpVerification from "./pages/OtpVerification";
import AdminPage from "./pages/AdminPage";
import DashBoard from "./components/DashBoard";
import Employees from "./components/Employees";
import MyDocuments from "./components/MyDocuments";
import MyCataLog from "./components/MyCataLog";
import SideBar from "./components/SIdeBar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        />
        
        

        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <CreateAccount />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        />
       
         <Route
          path="/admin/*"
          element={
            <AdminPage>
              <Routes>
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="employees" element={<Employees />} />
                <Route path="documents" element={<MyDocuments />} />
                <Route path="catalog" element={<MyCataLog />} />
              </Routes>
            </AdminPage>
          }
        />

        <Route
          path="/forgot-password"
          element={
            <>
              <Header />
              <ForgotPassword />
              <Footer />
            </>
          }
        />
        <Route
          path="/verify-otp"
          element={
            <>
              <Header />
              <OtpVerification />
              <Footer />
            </>
          }
        />
        <Route
          path="/create-password"
          element={
            <>
              <Header />
              <CreateNewPassword />
              <Footer />
            </>
          }
        />
    
      </Routes>

    </BrowserRouter>
  );
}

export default App;
