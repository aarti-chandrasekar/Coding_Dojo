import React, { useState } from 'react'

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        
        <form class="row d-flex justify-content-center">
            <div class="bg-dark m-2 p-3 w-50" >
            {/* <!-- First Name --> */}
            <div class="form-group">
                <label htmlFor="first_name" class="form-label text-white">First Name </label>
                <input type="text" name="first_name" id="first_name" 
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName} class="rounded form-control" />
            </div>

            {/* <!-- Last Name --> */}
            <div class="form-group">
                <label htmlFor="last_name" class=" text-white form-label">Last Name  </label>
                <input type="text" name="last_name" id="last_name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName} class="rounded form-control" />
            </div>

            {/* <!-- Email --> */}
            <div class="form-group">
                <label htmlFor="email" class=" text-white">Email  </label>
                <input type="email" name="email" id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} class="rounded form-control" />
            </div>

            {/* <!-- Password --> */}
            <div class="form-group">
                <label htmlFor="password" class=" text-white">Password  </label>
                <input type="password" name="password" id="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} class="rounded form-control" />
            </div>

            {/* <!-- Confirm Password --> */}
            <div class="form-group">
                <label htmlFor="confirm_password" class=" text-white">Confirm Password  </label>
                <input type="password" name="confirm_password" id="confirm_password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword} class="rounded form-control" />
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