import React from "react";

const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    console.log("username" + uname.value + "pass"  + pass.value);
};


const LoginForm = () => {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default LoginForm;