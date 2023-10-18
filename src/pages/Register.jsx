import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../Provides/AuthProvider";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import gg from "../assets/google.png";

const Register = () => {
  const { register, googleLogin, setUser } = useContext(AuthContext);
  const [showpass, setshowpass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    if (pass.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Atleast 6 Character",
      });
      return;
    } else if (!/(?=.*[A-Z])/.test(pass)) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Atleast One Capital Letter",
      });
      return;
    } else if (!/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(pass)) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Atleast One Special Character",
      });
      return;
    }
    // !emailRegex.test(pass)
    // register in user
    register(email, pass)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photourl,
        }).then(() => setUser({ displayName: name, photoURL: photourl }));
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: "Your Registration was Succesful",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: err.message,
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
          <h2 className="text-black font-bold text-2xl">Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              required="required"
              name="name"
              className="w-full my-4 p-3 focus:outline-none border"
            />
            <input
              type="text"
              placeholder="Photo Url"
              name="photourl"
              className="w-full my-4 p-3 focus:outline-none border"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required="required"
              className="w-full my-4 p-3 focus:outline-none border"
            />
            <div className="relative">
              <input
                type={showpass ? "text" : "password"}
                placeholder="password"
                name="pass"
                required="required"
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
              value="Register"
              className="w-full my-4 py-3 cursor-pointer text-xl  bg-[#54595f] hover:bg-[#323538] border-[#54595f] hover:text-white text-white"
            />
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-[#323538]">
              Login
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

export default Register;
