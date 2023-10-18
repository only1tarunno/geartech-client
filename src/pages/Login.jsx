import { FaEye, FaEyeSlash } from "react-icons/fa6";
import gg from "../assets/google.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provides/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const [showpass, setshowpass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    // log in user
    logIn(email, pass)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Succesful",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Invalid username or password",
        });
      });
  };
  // google login
  const glogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: "Google Login was Succesful",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Google Login is Incomplete",
        });
      });
  };
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <div className="flex items-center justify-center gap-5 flex-col py-20">
        <div className="w-full lg:w-1/2 border rounded-md p-10">
          <h2 className="text-black font-bold text-2xl">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full my-4 p-3 focus:outline-none border"
            />
            <div className="relative">
              <input
                type={showpass ? "text" : "password"}
                placeholder="password"
                name="pass"
                className="w-full p-3 focus:outline-none border"
              />
              <span
                onClick={() => setshowpass(!showpass)}
                className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
              >
                {showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
            <input
              type="submit"
              value="LogIn"
              className="w-full my-4 py-3 cursor-pointer text-xl bg-[#54595f] hover:bg-[#323538] border-[#54595f] hover:text-white text-white"
            />
          </form>
          <p className="text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="font-bold text-[#323538]">
              Create an account
            </Link>
          </p>
        </div>
        <div className="w-full lg:w-2/6">
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <div
              onClick={glogin}
              className="w-full flex justify-center items-center mt-5 border border-[#C7C7C7] bg-[#54595f] hover:bg-[#323538] text-white cursor-pointer btn"
            >
              <span>
                <img src={gg} className="w-5" alt="" />
              </span>
              <p className="font-medium">Continue with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
