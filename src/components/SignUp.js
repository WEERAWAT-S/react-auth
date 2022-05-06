import React, { useState } from "react";
import { Navigate, Link } from 'react-router-dom';
import firebaseConfig from "../config";

const SignUp = () => {

    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
        } catch (error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div className="container p-5">
            <Link to="/" className="btn btn-outline-dark float-end">Home</Link>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default SignUp;