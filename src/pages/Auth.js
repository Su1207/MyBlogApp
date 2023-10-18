import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../fireBase";
import { useNavigate } from "react-router-dom";
import "./loginStyle.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { color } from "framer-motion";
import { TiUser, TiUserOutline } from "react-icons/ti";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = ({ setActive, setUser }) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);

  const { email, password, firstName, lastName, confirmPassword } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        // setUser(user);
        setActive("home");
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("Password don't match");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        setActive("home");
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    }
    navigate("/home");
  };

  return (
    <div className="App">
      <div className="auth-image">
        <img
          className="auth__img"
          src="assets/images/-signup.gif"
          alt="Sign Up"
        />
      </div>
      <div className="auth-form-container">
        <FaUserCircle className="user-img" size="80px" />
        <h2>
          {/* Only add those input option when we are in signIn */}
          {!signUp ? "Sign In" : "Sign Up"}
        </h2>
        <form className="row" onSubmit={handleAuth}>
          {signUp && (
            <>
              <div className="firstName">
                <TiUser className="firstName-logo" size="30px" />
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="lastName">
                <TiUserOutline className="lastName-logo" size="30px" />
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <div className="gmail">
            <MdEmail className="email-logo" size="30px" />
            <input
              type="email"
              className="form-control input-text-box"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="passw">
            <RiLockPasswordFill className="password-logo" size="30px" />
            <input
              type="password"
              className="form-control input-text-box"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          {signUp && (
            <div className="passw">
              <RiLockPasswordLine className="password-logo1" size="30px" />
              <input
                type="password"
                className="form-control input-text-box"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          <button
            className={`btn ${!signUp ? "btn-sign-in" : "btn-sign-up"}`}
            type="submit"
            style={{ cursor: "pointer", border: "none" }}
          >
            {!signUp ? "Sign In" : "Sign Up"} {/* value */}
          </button>
        </form>
        <div>
          {!signUp ? (
            <div className="para-btn">
              <p>
                Don't have an account ?&nbsp;
                <span
                  className="link-danger"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#298af2",
                  }}
                  onClick={() => setSignUp(true)}
                >
                  Sign Up
                </span>
              </p>
            </div>
          ) : (
            <div className="para-btn">
              <p>
                Already have an account ?&nbsp;
                <span
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#c43421",
                  }}
                  onClick={() => setSignUp(false)}
                >
                  Sign In
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
