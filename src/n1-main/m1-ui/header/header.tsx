import {NavLink} from "react-router-dom";
import style from "./header.module.css"

export const Header = () =>{

    return(
        <div className={style.header}>
            <NavLink className={style.link} to={`/login`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Login</NavLink>
            <NavLink className={style.link} to={`/register`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Register</NavLink>
            <NavLink className={style.link} to={`/profile`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Profile</NavLink>
            <NavLink className={style.link} to={`/error`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Error</NavLink>
            <NavLink className={style.link} to={`/newPassword`} style = {(params)=>({color:params.isActive?'coral':'black'})}>New password</NavLink>
            <NavLink className={style.link} to={`/repairPassword`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Repair password</NavLink>
            <NavLink className={style.link} to={`/test`} style = {(params)=>({color:params.isActive?'coral':'black'})}>test</NavLink>

        </div>
    )
}