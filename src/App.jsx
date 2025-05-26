import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import PanelAdmin from "./pages/panelAdmin";
import "./styles/app.css";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/panelAdmin" element={<PanelAdmin />} />
        </Routes>
      </ProductsProvider>
    </>
  );
}

export default App;
