import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "./Auth";

const Home = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <div className="container mt-5">
                <h1>Home</h1>
                {currentUser ? (
                    <p>You are logged in - <Link to="/dashboard">View Dashboard</Link></p>
                ) : (
                    <p>
                        <Link to="/login" className="btn btn-sm btn-primary">Log In</Link> or <Link to="/signup" className="btn btn-sm btn-success">Sign Up</Link>
                    </p>
                )}
            </div>
        </>
    )
}

export default Home;