import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign In</h1>

                    <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />

                    <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />

                    <button type="submit" className="w-full bg-primary hover:bg-primary-500 text-white transition font-semibold px-6 py-3 uppercase text-lg mt-4">
                        Login
                    </button>

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
