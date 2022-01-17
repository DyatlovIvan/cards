import {NavLink} from "react-router-dom";
import style from "./header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import {logoutTC} from "../../bll/loginReduser";

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
            <NavLink className={style.link} to={`/set-new-password/:token`} style = {(params)=>({color:params.isActive?'coral':'black'})}>New password</NavLink>
            <NavLink className={style.link} to={`/forgot`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Repair password</NavLink>
            <NavLink className={style.link} to={`/packs`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Packs</NavLink>
            <NavLink className={style.link} to={`/cards`} style = {(params)=>({color:params.isActive?'coral':'black'})}>Cards</NavLink>
        </div>
    )
}