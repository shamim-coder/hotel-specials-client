import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Utilities/Firebase/firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email && !password) {
            return;
        } else {
            signInWithEmailAndPassword(email, password);
        }
    };

    if (error) {
        toast.error(error.message);
    }

    user && navigate(from, { replace: true });

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <Toaster position="top-center" reverseOrder={true} />
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                <form onSubmit={handleSignIn} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" required />
                    <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" required />

                    <button type="submit" className="w-full bg-primary hover:bg-primary-500 text-white transition font-semibold px-6 py-3 uppercase text-lg mt-4">
                        {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Login"}
                    </button>
                </form>
                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the{" "}
                    <Link className="no-underline border-b border-grey-dark text-grey-dark" to="#">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link className="no-underline border-b border-grey-dark text-grey-dark" to="#">
                        Privacy Policy
                    </Link>
                </div>

                <div className="text-grey-dark mt-6">
                    Haven't any account?{" "}
                    <Link className="no-underline border-b border-blue text-blue" to="/registration">
                        Sign Up
                    </Link>
                    .
                </div>
            </div>
        </div>
    );
};

export default Login;
