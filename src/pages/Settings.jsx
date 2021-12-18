import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Settings() {
  const [auth, { handleSignout }] = useContext(AuthContext);

  return (
    <div>
      <h1>Settings Page</h1>
      <div>
        <button onClick={handleSignout}>SIGN OUT</button>
      </div>
      <div>
        <Link to="/dashboard/settings/user">User Details</Link>
      </div>
    </div>
  );
}

export default Settings;
