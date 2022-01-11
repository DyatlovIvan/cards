import React, {useEffect} from 'react';
import './App.css';
import {ShowAllComponents} from "../../n2-features/f5-presentation/p1-allComponents/ShowAllComponents";
import {Header} from "./header/header";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "../../n2-features/f1-auth/a1-login/login";
import {Register} from "../../n2-features/f1-auth/a2-register/register";
import {Profile} from "../../n2-features/f2-profile/profile";
import {Error} from "../../n2-features/f3-error/error";
import {NewPassword} from "../../n2-features/f4-password/p1-newPassword/newPassword";
import {RepairPassword} from "../../n2-features/f4-password/p2-repairPassword/repairPassword";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../m2-bll/store";


//chek merge
const App = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<RootStoreType,boolean>(state => state.Login.isLoggedIn)
    const loggedIn = useSelector<RootStoreType>(state =>state.Login._id)
    const navigate = useNavigate()
    // useEffect(()=>{
    //     debugger
    //    if (loggedIn==false){
    //        dispatch(authMe())
    //    }
    // },[loggedIn])

    useEffect(() =>{
        if(isLoggedIn){
            navigate('/profile')
        }},[isLoggedIn])

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
                <Route path={'/test'} element={<ShowAllComponents/>}/>

            </Routes>

        </div>
    );
}

export default App;
