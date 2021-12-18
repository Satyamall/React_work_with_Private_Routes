import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const [auth, { handleSignout }] = useContext(AuthContext);

  return (
    <div>
      Welcome to Dashboard
      <div>
        <button onClick={handleSignout}>SIGN OUT</button>
      </div>
      <div>
        <Link to="/dashboard/settings">Settings</Link>
      </div>
    </div>
  );
}

export default Dashboard;
