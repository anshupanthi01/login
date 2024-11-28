import React from 'react'

export default function Login() {
  return (
    <div>
      <div className="container">
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" placeholder="username" required/>
            <i className="fa-solid fa-user"></i>
        </div>
        <div className="input-box">
            <input type="text" placeholder="password" required/>
            <i className="fa-solid fa-lock"></i>
        </div>
        <div className="remember-forgot">
            <label>
                <input type="checkbox"/>
                remember me
            </label>
            <a href="https://www.google.com/">
                Forgot password
            </a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="register-link">
            <p>Don't have an account?</p>
            <a href="https://www.google.com/">Register here</a>
        </div>
    </div>
    </div>
  )
}
