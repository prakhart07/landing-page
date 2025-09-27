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

    // Generic handle change
    const handleChange = (e, type) => {
        const { name, value } = e.target;
        if (type === "login") setLoginData({ ...loginData, [name]: value });
        if (type === "signup") setSignupData({ ...signupData, [name]: value });
        if (type === "forget") setForgetData({ ...forgetData, [name]: value });
    };

    // Get users from localStorage
    const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

    // Save users to localStorage
    const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

    // Login
    const handleLogin = (e) => {
        e.preventDefault();
        const users = getUsers();
        const user = users.find(
            (u) => u.email === loginData.email && u.password === loginData.password
        );

        if (user) {
            setError("");
            localStorage.setItem("currentUser", JSON.stringify(user));
            setIsLoggedIn?.(true);
            navigate("/dashboard");
        } else {
            setError("Invalid email or password");
        }
    };

    // Signup
    const handleSignup = (e) => {
        e.preventDefault();
        const users = getUsers();

        if (users.some((u) => u.email === signupData.email)) {
            setError("User already exists with this email");
            return;
        }

        const newUser = { ...signupData };
        users.push(newUser);
        saveUsers(users);

        alert("Signup successful!");
        setSignupData({ name: "", email: "", password: "" });
        setPage("login");
        setError("");
    };

    // Forget password
    const handleForget = (e) => {
        e.preventDefault();
        const users = getUsers();
        const user = users.find((u) => u.email === forgetData.email);
        if (user) {
            alert(`Password for ${user.email}: ${user.password}`);
        } else {
            alert("Email not found.");
        }
        setForgetData({ email: "" });
        setPage("login");
    };


   
    return (
        <div className="auth-container">
            {page === "login" && (
                <div className="login-form-tag">
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
                    {error && <p style={{ color: "red" }}>{error}</p>}
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
                <div className="signup-form-tag">
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
                    {error && <p style={{ color: "red" }}>{error}</p>}
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
