import React, { useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import { sendEmailVerification } from 'firebase/auth'

const Dashboard = () => {

    const [sentEmail, setSentEmail] = useState(false);

    const { currentUser } = useContext(AuthContext);

    // currentUser.providerData.forEach((profile) => {
    //     console.log("Sign-in provider: " + profile.providerId);
    //     console.log("  Provider-specific UID: " + profile.uid);
    //     console.log("  Name: " + profile.displayName);
    //     console.log("  Email: " + profile.email);
    //     console.log("  Photo URL: " + profile.photoURL);
    //   });

    const verifyEmail = () => {
        sendEmailVerification(currentUser)
            .then(() => {
                setSentEmail(true);
            });
    }

    if (!currentUser) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            <div className="container mt-5">
                <h1>Welcome, {currentUser.email}</h1>
                <p>This is the dashboard, if you can see this you're logged in.</p>
                {currentUser.emailVerified ? <p>You have verified your email address.</p>
                : <p className="text-danger">You haven't verified your email address.<button className={`btn btn-sm ${sentEmail ? 'btn-success disabled' : 'btn-outline-success'} ms-2`} onClick={verifyEmail}>{sentEmail ? 'Please check your email.' : 'Verify Email-Address'}</button></p>}
                <button onClick={() => firebaseConfig.auth().signOut()} className="btn btn-danger">Sign Out</button>
            </div>
        </div>
    )
}

export default Dashboard;