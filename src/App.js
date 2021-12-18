import { NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./routes/routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}
