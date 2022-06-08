import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Utilities/Firebase/firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Registration = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const handleCreateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setErrorMessage("Password doesn't match");
            return;
        } else {
            setErrorMessage("");
        }

        createUserWithEmailAndPassword(email, password);

        signOut(auth);

        navigate("/login");
    };

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                <form onSubmit={handleCreateUser} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" placeholder="Full Name" />

                    <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" required />

                    <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" required />
                    <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="confirmPassword" placeholder="Confirm Password" required />
                    <p className="text-red-500">{errorMessage}</p>
                    <button type="submit" className="w-full bg-primary hover:bg-primary-500 text-white transition font-semibold px-6 py-3 uppercase text-lg mt-4">
                        Create Account
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
                    Already have an account?{" "}
                    <Link className="no-underline border-b border-blue text-blue" to="/login">
                        Log in
                    </Link>
                    .
                </div>
            </div>
        </div>
    );
};

export default Registration;
