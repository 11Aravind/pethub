import "../css/login.css";
import { Link } from "react-router-dom";
import Inputtxt from "../component/Inputtxt";

export default function Login() {
  return (
    <div className="">
      <div className="logincontainer">
        <div className="left">
          <img src="./asset/image/login_user.svg" alt="" />
        </div>
        {/* <span className="vl"></span> */}
        <div className="right">
          <form action="">
            <div className="login-pic ">
              <img
                className="center"
                src="./asset/image/profile_pic.svg"
                alt=""
              />
            </div>
            <h2 className="text-center">Login</h2>
            <Inputtxt type='text' label='Username' />
            <Inputtxt type='password' label='Password' small='Forget password?'  smallclass='highlight'/>
            <button className="login-btn center">Login</button>
            <Link to="/register">create account</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
