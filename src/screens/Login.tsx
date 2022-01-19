import LoginArea from "../components/Login/LoginArea";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <Link to="/admin">Admin</Link>
      <br />
      <Link to="/admin/teacher">Admin Teacher</Link>
      <LoginArea />
    </div>
  );
}

export default Login;
