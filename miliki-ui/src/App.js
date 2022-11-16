import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./context/privateRoutes";
import Homepage from "./components/pages/Homepage";
import MilikiSignin from "./components/pages/MilikiSignin";
import MilikiSignup from "./components/pages/MilikiSignup";
import MilikiDashboard from "./components/pages/MilikiDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />}>
        <Route path="home" element={<MilikiDashboard />} />
        </Route>

        <Route path="/" element={<Homepage />} />
          <Route path="signup" element={<MilikiSignup />} />
          <Route path="signin" element={<MilikiSignin />} />
          <Route path="home" element={<MilikiDashboard />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
