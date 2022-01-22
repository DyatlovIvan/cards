import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./header/header";
import {Route, Routes} from "react-router-dom";
import {Login} from "./auth/login/login";
import {Register} from "./auth/register/register";
import {Profile} from "./profile/profile";
import {Error} from "./error/error";
import {NewPassword} from "./password/newPassword/newPassword";
import {ForgotPassword} from "./password/forgotPassword/forgotPassword";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../bll/store";
import {isAuth} from "../bll/loginReduser";
import {Packs} from "./packs/packs";
import {Email} from "./password/email";
import {Cards} from "./cards/cards";
import EditProfile from "./profile/editProfile/editProfile";


const App = () => {
    const dispatch = useDispatch()
    const isInitialized = useSelector<RootStoreType, boolean>(state => state.App.isInitialized)

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
                <Route path={'login'} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'error'} element={<Error/>}/>
                <Route path={'forgot'} element={<ForgotPassword/>}/>
                <Route path={'set-new-password/:token'} element={<NewPassword/>}/>
                <Route path={'email'} element={<Email/>}/>
                <Route path={'packs'} element={<Packs/>}/>
                <Route path={'cards/:id'} element={<Cards/>}/>
                <Route path={'edit-profile'} element={<EditProfile/>}/>
            </Routes>

        </div>
    );
}
export default App;
