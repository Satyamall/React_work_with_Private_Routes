import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function User() {
  const [{ handleSignout }] = useContext(AuthContext);

  return (
    <div>
      <h2>Uder Details</h2>
      <h3>Satya Prakash Mall</h3>
      <p>I am a full Stack Web Developer</p>
      <div>
        <button onClick={handleSignout}>SIGN OUT</button>
      </div>
    </div>
  );
}

export default User;
