import "../../public-css/root.css";
import "../../public-css/signup-login.css"
import "./login.css";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/navbar";

const Login = () => {
return (
<div className="App">
    <Navbar />
    <div class="login-container justify-align">
        <form class="container form-container">
            <h2 class="login-head">Login</h2>
            <label for="username" class="input-text">Email address</label><br />
            <input type="text" id="username" name="username" placeholder="abc@gmail.com" class="input-box title-content"
                required /><br />
            <label for="password" class="input-text">Password</label><br />
            <input type="password" id="password" name="password" placeholder="**********"
                class="input-box title-content" required />
            <div class="check-pass">
                <label for="checkbox">
                    <input type="checkbox" id="checkbox" name="checkbox" /> Remember me</label>
                <button class="btn-no-bg">Forgot your Password?</button>
            </div>
            <div>
                <Link to="/">
                <button class="btn-info btn btn-text long-btn">Login</button>
                </Link>
            </div>
            <div class="new-ac">
                <Link to="/signup">
                <button class="btn-no-bg">Create New Account</button>
                </Link>
            </div>
        </form>
    </div>
</div>
);
};

export {Login};