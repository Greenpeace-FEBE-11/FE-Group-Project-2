import Logo from "/LogresAssets/img/logo.png";
import Bg from "/LogresAssets/img/Mountain.jpg"
import "../css/Logres.css";
import axios from "axios";
import { useState } from "react";
// import "../css/style1.css";

const Login = () => {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  

  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  const handleBtn = (e)=>{
    e.preventDefault()
    console.log({email,password});
    axios('https://63528ae6a9f3f34c37409536.mockapi.io/logres',{
      email : email,
      password: password
    }).then(result=>{
      console.log(result.data);
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <>
    <h1>ini login</h1>
      {/* <div className="bg-img"></div> */}
        <section className="login">
            <div className="container">
          <div className="row">
          <div className="col-md-7 left">
              <img src={Bg} className="img" />
            </div>

            <div className="logo">
              <img src={Logo} alt="logo" className="logo"/>
            </div>

            <div className="col-md-5 form">
                <div className="header">
                    <h1>LOGIN</h1>
                </div>

              <form id="login">               
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email-login"
                    value={email} onChange={handleEmail}
                  />
                
                
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password-login"
                    value={password} onChange={handlePassword}
                  />
                
                
                  <button
                    type="submit"
                    className="btn btn-success"
                    id="btn-login"
                    onClick={handleBtn}
                  >
                    Submit
                  </button>
                  <a className="text-dark">
                    <p>Belum punya akun?</p>
                  </a>
                
              </form>
            </div>
          </div>
          </div>
        </section>
      
    </>
  );
};
export default Login;
