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
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/login" element={<LogIn />} />
                    <Route exact path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
