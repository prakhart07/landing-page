import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Assests/CSS/login.css"; // optional styling

function Login({ setIsLoggedIn }) {
    const [page, setPage] = useState("login"); // login / signup / forget
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
    const [forgetData, setForgetData] = useState({ email: "" });
     const [error, setError] = useState("");

    const navigate = useNavigate();

    // Generic handle change for forms
    const handleChange = (e, type) => {
        const { name, value } = e.target;
        if (type === "login") setLoginData({ ...loginData, [name]: value });
        if (type === "signup") setSignupData({ ...signupData, [name]: value });
        if (type === "forget") setForgetData({ ...forgetData, [name]: value });
    };
 const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login data:", loginData);

        // Temporary hardcoded credentials
        if (loginData.email === "user@example.com" && loginData.password === "1234") {
            setError(""); // clear error
             if (setIsLoggedIn) setIsLoggedIn(true);
            navigate("/dashboard"); // ✅ redirect to dashboard
        } else {
            setError("Invalid email or password"); // show error
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Signup data:", signupData);
        alert("Signup successful!");
        setPage("login"); // redirect to login
    };

    const handleForget = (e) => {
        e.preventDefault();
        console.log("Forget password data:", forgetData);
        alert("Password reset link sent!");
        setPage("login"); // redirect to login
    };

    return (
        <div className="auth-container">
            {page === "login" && (
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={loginData.email}
                            onChange={(e) => handleChange(e, "login")}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={(e) => handleChange(e, "login")}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                    <p>
                        <span style={{ cursor: "pointer", color: "blue" }} onClick={() => setPage("signup")}>
                            Sign Up
                        </span>{" "}
                        |{" "}
                        <span style={{ cursor: "pointer", color: "blue" }} onClick={() => setPage("forget")}>
                            Forgot Password
                        </span>
                    </p>
                </div>
            )}

            {page === "signup" && (
                <div className="signup-form">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={signupData.name}
                            onChange={(e) => handleChange(e, "signup")}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signupData.email}
                            onChange={(e) => handleChange(e, "signup")}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signupData.password}
                            onChange={(e) => handleChange(e, "signup")}
                            required
                        />
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>
                        <span style={{ cursor: "pointer", color: "blue" }} onClick={() => setPage("login")}>
                            Back to Login
                        </span>
                    </p>
                </div>
            )}

            {page === "forget" && (
                <div className="forget-form">
                    <h2>Forgot Password</h2>
                    <form onSubmit={handleForget}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={forgetData.email}
                            onChange={(e) => handleChange(e, "forget")}
                            required
                        />
                        <button type="submit">Reset Password</button>
                    </form>
                    <p>
                        <span style={{ cursor: "pointer", color: "blue" }} onClick={() => setPage("login")}>
                            Back to Login
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Login;
