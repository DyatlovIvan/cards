import {NavLink} from "react-router-dom";
import style from "./header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../m2-bll/store";
import {logoutTC} from "../../../n2-features/f1-auth/a1-login/loginReduser";

export const Header = () =>{
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<RootStoreType, boolean>(state => state.Login.isLoggedIn)
    const logoutHandler = () =>{
        dispatch(logoutTC())
    }
    return(
        <div className={style.header}>
            {isLoggedIn ? <button onClick={logoutHandler}>logout</button> : <NavLink className={style.link} to={`/login`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Login</NavLink>}
            <NavLink className={style.link} to={`/register`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Register</NavLink>
            <NavLink className={style.link} to={`/profile`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Profile</NavLink>
            <NavLink className={style.link} to={`/error`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Error</NavLink>
            <NavLink className={style.link} to={`/newPassword`} style = {(params)=>({color:params.isActive?'coral':'black'})}>New password</NavLink>
            <NavLink className={style.link} to={`/repairPassword`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Repair password</NavLink>
            <NavLink className={style.link} to={`/test`} style = {(params)=>({color:params.isActive?'coral':'black'})}>test</NavLink>

        </div>
    )
}