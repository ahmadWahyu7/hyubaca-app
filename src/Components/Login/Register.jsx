import React from "react";
import { useMediaQuery } from "react-responsive";
import RegisterDesktop from "./RegisterDesktop";
import RegisterMobile from "./RegisterMobile";

const Register = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div className="login-bg">
            {isDesktop? (
                < RegisterDesktop />
            ) : (
                < RegisterMobile />
            )}
        </div>
    )
}

export default Register;