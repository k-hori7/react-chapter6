import Header from "./Header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
