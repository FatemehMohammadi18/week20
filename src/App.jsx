import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import PanelAdmin from "./pages/panelAdmin";
import "./styles/app.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/panelAdmin" element={<PanelAdmin />} />
      </Routes>
    </>
  );
}

export default App;
