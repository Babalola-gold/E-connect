import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./component/Layout"
import HomePage from "./component/HomePage"
import "./App.css"
import Cart from "./component/Cart"
import LoginPage from "./component/LoginPage"
import SignUp from "./component/SignUp"
import MyProfile from "./component/MyProfile"


function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          
          
        </Route>

        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp  />} />
        <Route path="/profile" element={<MyProfile />} />

      </Routes>
    </>
  )
}

export default App
