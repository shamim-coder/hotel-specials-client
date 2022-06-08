import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Full Name" />

                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />

                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />
                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" placeholder="Confirm Password" />

                    <button type="submit" className="w-full bg-primary hover:bg-primary-500 text-white transition font-semibold px-6 py-3 uppercase text-lg mt-4">
                        Create Account
                    </button>

                    <div class="text-center text-sm text-grey-dark mt-4">
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

                <div class="text-grey-dark mt-6">
                    Already have an account?{" "}
                    <Link class="no-underline border-b border-blue text-blue" to="/login">
                        Log in
                    </Link>
                    .
                </div>
            </div>
        </div>
    );
};

export default Registration;
