import {NavLink} from "react-router-dom";

export const Header = () =>{

    return(
        <div>
            <NavLink to={`/login`}>Login</NavLink>
            <NavLink to={`/register`}>Register</NavLink>
            <NavLink to={`/profile`}>Profile</NavLink>
            <NavLink to={`/error`}>Error</NavLink>
            <NavLink to={`/newPassword`}>New password</NavLink>
            <NavLink to={`/repairPassword`}>Repair password</NavLink>
            <NavLink to={`/test`}>test</NavLink>

        </div>
    )
}