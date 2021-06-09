import React, { Component, component } from 'react';
import iiitg from "./iiitg_logo.png";
import "./style.css";


class Login extends Component {

    logged() {
        alert("Logged in");
        console.log("state ", this.state);
    }

    toRegister() {
        document.location.href = "../register.js";
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="logo">
                        <a href="http://iiitg.ac.in/">
                            <img src={iiitg} />
                        </a>
                    </div>

                    <div className="iiitg">
                        <a href="http://iiitg.ac.in/" className="iiitg_name">
                            <p><b>INDIAN  INSTITUTE  OF  INFORMATION  TECHNOLOGY,  GUWAHATI</b></p>
                        </a>
                        <br />
                    </div>
                </div>

                <div className="body">
                    <div className="navigation">
                        <a href="http://iiitg.ac.in/" className="weblink">Home</a>
                        <a href="http://iiitg.ac.in/" className="weblink">About</a>
                        <a href="https://iiitg.ac.in/mail/src/login.php" className="weblink">Webmail</a>
                    </div>

                    <div className="welcome">
                        <h1 style={{ fontSize: 100, marginRight: 220, marginBottom: 0, color: '' }}> WELCOME </h1>
                        <p style={{ textAlign: 'left', fontSize: 35, wordSpacing: 3, marginLeft: 50, marginTop: 0 }}>To student portal<br /><br /></p>
                        <p style={{ textAlign: 'left', fontFamily: 'serif', fontSize: 25, marginLeft: 25, marginRight: 200, wordSpacing: 2 }}>
                            A consolidated platform for the IIITG community developed by IIITG fraternity
                            <br />Some more bakwaas content here
                            <br />Happy Learning!
                        </p>
                    </div>

                    <div className="form">
                        <div className="form_type">
                            <table>
                                <th className="login">Login</th>
                                <th className="signup" style={{ backgroundColor: 'white', color: '#1b395f', borderTopRightRadius: 50 }} onClick={() => this.toRegister()}>Sign Up</th>
                            </table>
                        </div>
                        <div>
                            <br />
                            <br /><br /><br />
                            <label>Email: </label>
                            <input type="text"
                                onChange={(e) => { this.setState({ email: e.target.value }) }}
                            />
                            <br /><br /><br />
                            <label>Password: </label>
                            <input type="text"
                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                            />
                            <br /><br /><br /><br /><br />
                        </div>
                        <button onClick={() => this.logged()}> Login </button>
                    </div>

                </div>

                <div className="footer">
                    footer
                </div>

            </div>
        );
    }
}

export default Login;