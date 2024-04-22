import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./component/Layout"
import HomePage from "./component/HomePage"
import "./App.css"


function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          
        </Route>

      </Routes>
    </>
  )
}

export default App
