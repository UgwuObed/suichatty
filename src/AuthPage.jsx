import React, { useState } from "react";
import axios from "axios";



const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true); 

  const toggleAuthMode = () => {
    
    setIsLogin(!isLogin);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      
      axios
        .post("http://localhost:3001/login", { username, secret })
        .then((r) => props.onAuth({ ...r.data, secret }))
        .catch((e) => console.log(JSON.stringify(e.response.data)));
    } else {
      
      axios
        .post("http://localhost:3001/signup", {
          username,
          secret,
          email,
          first_name,
          last_name,
        })
        .then((r) => props.onAuth({ ...r.data, secret }))
        .catch((e) => console.log(JSON.stringify(e.response.data)));
    }
  };

  return (
    <div className="login-page">
      <div className="card">
        <form onSubmit={onSubmit}>
          <div className="title">{isLogin ? "Login" : "Sign Up"}</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
            required
          />
          {!isLogin && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </>
          )}
          <button type="submit">{isLogin ? "LOG IN" : "SIGN UP"}</button>
        </form>

        <div className="toggle-auth">
        <span className="auth-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>
          <button type="button" onClick={toggleAuthMode}>
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </div>
      </div>
        <style>{`
        .login-page { width: 100vw; height: 100vh; padding-top: 6vw; background: linear-gradient(180deg, rgba(117,84,160,1) 7%, rgba(117,84,160,1) 17%, rgba(106,95,168,1) 29%, rgba(99,103,174,1) 44%, rgba(87,116,184,1) 66%, rgba(70,135,198,1) 83%, rgba(44,163,219,1) 96%, rgba(22,188,237,1) 100%, rgba(0,212,255,1) 100%); }
        .card { width: 200px; position: relative; left: calc(50vw - 100px); text-align: center; }
        .title { padding-top: 32px; font-size: 22px; color: white; font-weight: 700; }
        input { width: calc(100% - 16px); margin-top: 12px; padding: 8px; background-color: #e6f7ff; outline: none; border: 1px solid #e6f7ff; }
        button { margin-top: 12px; width: 100%; padding: 8px; }
        
      `}</style>
    </div>
  );
};

export default AuthPage;


