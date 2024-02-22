import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CreateAccount from "./pages/CreateAccount"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import CreateNewPassword from "./pages/CreateNewPassword"
import OtpVerification from "./pages/OtpVerification"

function App() {

  return (
    <>
    <Header/>
      <Routes>
       <Route  path="/" element={<HomePage/>}/>  
       <Route  path="/about" element={<About/>}/>  
       <Route  path="/contact" element={<Contact/>}/>  
       <Route  path="/signup" element={<CreateAccount/>}/>  
       <Route  path="/login" element={<Login/>}/>  
       <Route  path="/forgot-password" element={<ForgotPassword/>}/>  
       <Route  path="/verify-otp" element={<OtpVerification/>}/>  
       <Route  path="/create-password" element={<CreateNewPassword/>}/>  
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
