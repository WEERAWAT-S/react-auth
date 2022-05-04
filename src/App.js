import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/dashboard";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from './components/Auth'

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/login" element={<LogIn />} />
                    <Route exact path="/signup" element={<SignUp />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
