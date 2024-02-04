import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {  doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";


const auth = getAuth();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate()

  const handleAuthAction = async () => {
    try {
      if (isLogin) {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in successfully");
        navigate('/weather');
      } else {
        // Sign up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Add user to the "users" collection in Firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
          username,
          email,
          addedDate: new Date(),
          status: "active",
        });
        console.log("User added to Firestore");
        navigate('/weather');
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
      <form>
        {!isLogin && (
          <div className="form-group">
            <label>
              Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
          </div>
        )}
        <div className="form-group">
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <button className="btn btn-primary" type="button" onClick={handleAuthAction}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link to="#" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign up" : "Login"}
        </Link>
      </p>
    </div>
  );
};

export default Login;