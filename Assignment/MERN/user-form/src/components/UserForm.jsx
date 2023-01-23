import React, { useState } from 'react'

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    // Error Messages
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState("");

    // Validation methods

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        setFirstNameError(e.target.value.length < 2 ? "First Name must be at least 2 characters " : "");
    }

    const validateLastName = (e) => {
        setLastName(e.target.value);
        setLastNameError(e.target.value.length < 2 ? "Last Name must be at least 2 characters " : "");
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        setEmailError(e.target.value.length < 5 ? "Email must be at least 5 characters " : "");
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters ");
            setPasswordMatchError("");
        } else if (e.target.value !== confirmPassword) {
            setPasswordMatchError("Password & Confirm Password must match ");
            setPasswordError("");
        } else {
            setPasswordError("");
            setPasswordMatchError("");
        }
    }
    
    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmPasswordError("Confirm Password must be at least 8 characters ");
            setPasswordMatchError("");
        } else if (e.target.value !== password) {
            setPasswordMatchError("Password & Confirm Password must match ");
            setConfirmPasswordError("");
        } else {
            setConfirmPasswordError("");
            setPasswordMatchError("");
        }
    }

    return (
        <form class="row d-flex justify-content-center">
            <div class="bg-dark m-2 p-3 w-50" >
                {/* <!-- First Name --> */}
                <div class="form-group">
                    <label htmlFor="first_name" class="form-label text-white">First Name </label>
                    <input type="text" name="first_name" id="first_name"
                        onChange={validateFirstName}
                        value={firstName} class="rounded form-control" />
                    {firstNameError ? <p class="text-danger">{firstNameError}</p> : ""}
                </div>

                {/* <!-- Last Name --> */}
                <div class="form-group">
                    <label htmlFor="last_name" class=" text-white form-label">Last Name  </label>
                    <input type="text" name="last_name" id="last_name"
                        onChange={validateLastName}
                        value={lastName} class="rounded form-control" />
                    {lastNameError ? <p class="text-danger">{lastNameError}</p> : ""}
                </div>

                {/* <!-- Email --> */}
                <div class="form-group">
                    <label htmlFor="email" class=" text-white">Email  </label>
                    <input type="email" name="email" id="email"
                        onChange={validateEmail}
                        value={email} class="rounded form-control" />
                    {emailError ? <p class="text-danger">{emailError}</p> : ""}
                </div>

                {/* <!-- Password --> */}
                <div class="form-group">
                    <label htmlFor="password" class=" text-white">Password  </label>
                    <input type="password" name="password" id="password"
                        onChange={validatePassword}
                        value={password} class="rounded form-control" />
                    {passwordError ? <p class="text-danger">{passwordError}</p> : ""}
                </div>

                {/* <!-- Confirm Password --> */}
                <div class="form-group">
                    <label htmlFor="confirm_password" class=" text-white">Confirm Password  </label>
                    <input type="password" name="confirm_password" id="confirm_password"
                        onChange={validateConfirmPassword}
                        value={confirmPassword} class="rounded form-control" />
                    {confirmPasswordError ? <p class="text-danger">{confirmPasswordError}</p> : ""}
                    {passwordMatchError ? <p class="text-danger">{passwordMatchError}</p> : ""}
                </div>
            </div>
            <div class="m-2 p-3 w-50">
                <p class="row">First Name : {firstName}</p>
                <p class="row">Last Name : {lastName}</p>
                <p class="row">Email : {email}</p>
                <p class="row">Password : {password}</p>
                <p class="row">Confirm Password : {confirmPassword}</p>
            </div>
        </form>

    );
}

export default UserForm