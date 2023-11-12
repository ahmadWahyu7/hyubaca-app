import React from "react";
import { useMediaQuery } from "react-responsive";


import LoginDesktop from "./LoginDesktop";
import LoginMobile from "./LoginMobile";

const Login = () => {
    

    // fungsi untuk mengatur responsive web
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div className="login-bg">
            {isDesktop? (
                <LoginDesktop />
            ) : (
                <LoginMobile />
            )}
        </div>
    )
}

export default Login;