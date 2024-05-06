import { Route, Routes } from "react-router-dom"
import Layout from "./component/Layout"
import HomePage from "./component/HomePage"
import "./App.css"
import Cart from "./component/Cart"
import LoginPage from "./component/LoginPage"
import SignUp from "./component/SignUp"
import MyProfile from "./component/MyProfile"
import ProfileLayout from "./component/ProfileLayout"


function App() {


  return (
    <>
      <Routes>

        <Route element={<Layout />}>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />


        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/profile" element={<ProfileLayout />}>
          {/* <Route path="/profile" element={<Navigate to="/profile" />} /> */}
          {/* <Route path="/admin/dashboard" element={<AdminDashBoard />} /> */}
          <Route path="/profile" element={<MyProfile />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
