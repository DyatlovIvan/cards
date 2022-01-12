import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./header/header";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "./auth/login/login";
import {Register} from "./auth/register/register";
import {Profile} from "./profile/profile";
import {Error} from "./error/error";
import {NewPassword} from "./password/newPassword/newPassword";
import {RepairPassword} from "./password/repairPassword/repairPassword";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../bll/store";
import {isAuth} from "../bll/loginReduser";


//chek merge
const App = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<RootStoreType, boolean>(state => state.Login.isLoggedIn)
    const isInitialized = useSelector<RootStoreType, boolean>(state => state.App.isInitialized)
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(isAuth())
    }, [])

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/profile')
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (isInitialized && !isLoggedIn) {
            navigate('/login')
        }
    }, [isInitialized, isLoggedIn])

    if (!isInitialized){
        return <div>loading</div>
    }

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/Register'} element={<Register/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/error'} element={<Error/>}/>
                <Route path={'/newPassword'} element={<NewPassword/>}/>
                <Route path={'/repairPassword'} element={<RepairPassword/>}/>
            </Routes>

        </div>
    );
}

export default App;
