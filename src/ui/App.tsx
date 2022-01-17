import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./header/header";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "./auth/login/login";
import {Register} from "./auth/register/register";
import {Profile} from "./profile/profile";
import {Error} from "./error/error";
import {NewPassword} from "./password/newPassword/newPassword";
import {ForgotPassword} from "./password/forgotPassword/forgotPassword";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../bll/store";
import {isAuth} from "../bll/loginReduser";
import {Email} from "./password/email";


const App = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<RootStoreType, boolean>(state => state.Login.isLoggedIn)
    const isInitialized = useSelector<RootStoreType, boolean>(state => state.App.isInitialized)
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(isAuth())
    }, [])

    if (!isInitialized){
        return <div>loading</div>
    }

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/error'} element={<Error/>}/>
                <Route path={'/forgot'} element={<ForgotPassword/>}/>
                <Route path={'/set-new-password/:token'} element={<NewPassword/>}/>
                <Route path={'/email'} element={<Email/>}/>
            </Routes>

        </div>
    );
}

export default App;
