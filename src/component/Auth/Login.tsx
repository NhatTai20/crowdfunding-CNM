import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import MetamaskPNG from "../../assets/metamask.png"
import AppPNG from "../../assets/app.png"
import "./Login.scss"
function Login() {
    const handleConnect =  (e: any) => {
        alert("Login")
    }
  return (
    <div className="create-container">
            <Link to="/" className="backto-home">Back to home</Link>
            <div className="split-container">

                <div className="form-container auth">
                    <div className="form">
                        <h2 className="heading">Log In</h2>

                        <div className="login-dg">
                            <img width="60" height="60" src={MetamaskPNG} alt="" />
                            <p>- - - - - - -</p>
                            <img width="60" height="60" src={AppPNG} alt="" />
                        </div>

                        <p className="login-message">Login with Metamask</p>

                        <div className="flex-container">
                            <button onClick={handleConnect}>Connect Metamask</button>
                            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                                Add Metamask To Chrome
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Login