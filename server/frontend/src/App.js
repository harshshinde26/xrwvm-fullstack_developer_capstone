import LoginPanel from "./components/Login/Login"
import register_container from"./components/Register/Register"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<register_container />} />
    </Routes>
  );
}
export default App;
