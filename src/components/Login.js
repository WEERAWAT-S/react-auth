import React, { useContext, useState } from "react";
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";

const LogIn = () => {

    const [currentEmail, setCurrentEmail] = useState(true);
    const [currentPassword, setCurrentPassword] = useState(true);
    const [errors, setErrors] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();


        const { email, password } = e.target.elements;

        // console.log(password.value.length);

        if (email.value.length === 0) {
            setCurrentEmail(false)
        } else {
            setCurrentEmail(true)
        }

        if (password.value.length === 0) {
            setCurrentPassword(false)
        } else {
            setCurrentPassword(true)
        }

        firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
        .catch(() => {
            setErrors(true);
        })
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Navigate to="/dashboard" />
    }


    return (
        <div className="container p-5">
            <Link to="/" className="btn btn-outline-dark float-end">Home</Link>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                {errors ? <p className="alert alert-danger">email or password is wrong!</p> : ''}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className={`form-control ${!currentEmail ? "border border-danger" : ""}`} />
                    {!currentEmail ? <p class="text-danger">
                        Please enter your email.
                    </p> : ''}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className={`form-control ${!currentPassword ? "border border-danger" : ""}`} />
                    {!currentPassword ? <p class="text-danger">
                        Please enter your password.
                    </p> : ''}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LogIn;