import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { handleRegister, manageProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    //   get value from input
    const name = form.name.value;
    const email = form.email.value;
    const photo_url = form.photo_url.value;
    const password = form.password.value;
    const conPass = form.conPass.value;

    if (password.length < 6) {
      toast.warn("Password must be 6 characters");
      return;
    }
    if (password !== conPass) {
      toast.error("Password not matched");
      return;
    }
    if (!/^(?=.*[a-z]).*$/.test(password)) {
      toast.warn("Password must be at least one lowercase letter");
      return;
    }
    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      toast.warn("Password must be at least one uppercase letter");
      return;
    }

    handleRegister(email, password)
      .then((res) => {
        manageProfile(name, photo_url);
        setUser({ displayName: name, photoURL: photo_url, email: email });

        //create user entry in the database
        const userInfo = {
          name: name,
          email: email,
          profile_picture: photo_url,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user added to the db");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
        setUser(res.user);
        navigate(res.user && "/");
      })
      .catch((err) => {
        toast.warn(err.code);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#676179] py-6">
      <div className="md:flex gap-4 p-4  rounded-xl bg-[#2B2738]">
        <div className="relative">
          <img
            className="w-[550px] h-full rounded-lg object-cover"
            src="https://i.ibb.co.com/bQwJC7B/thought-catalog-505eect-W54k-unsplash.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-[#2B2738] bg-opacity-30"></div>
        </div>
        <div className="card  bg-[#2B2738] w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-[#FFFEFF] ml-7 mt-2">
            Create an account
          </h1>
          <p className="text-white ml-8 mt-2">
            Already have an account?
            <NavLink to="/login" className="text-[#6E54B5]">
              Login
            </NavLink>
          </p>
          <form onSubmit={handleSubmit} className="card-body py-1">
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered h-10 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered h-10 text-sm"
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Photo-URL</span>
              </label>
              <input
                type="text"
                name="photo_url"
                placeholder="photo url"
                className="input input-bordered h-10 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered h-10 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input
                type="password"
                name="conPass"
                placeholder="confirm password"
                className="input input-bordered h-10 text-sm"
                required
              />
            </div>
            <div className="form-control my-3">
              <button className="btn bg-[#6E54B5] border-none text-white hover:bg-purple-950">
                Register
              </button>
            </div>
          </form>
          {/* <div className="divider  divider-warning mt-0 text-[#D0CFD1]">
              OR register with
            </div>
            <button
              onClick={handleGoogleLoginbtn}
              className=" text-lg btn w-3/4 mx-auto bg-[#2B2738] text-[#D0CFD1] hover:text-black"
            >
              <FcGoogle className="" />
              Google
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
