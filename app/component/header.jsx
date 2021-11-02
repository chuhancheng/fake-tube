
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="fixed top-0 w-full bg-gray-600 leading-8">
            <div className="flex justify-between">
                <div className="logo text-red-500 px-4"><Link to="/">FakeTube</Link></div>
                <div className="flex">
                    <div className="sign-in px-2 cursor-pointer hover:bg-green-600 active:bg-green-700">Sign In</div>
                    <div className="sign-up px-2 cursor-pointer hover:bg-green-600 active:bg-green-700">Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default Header;