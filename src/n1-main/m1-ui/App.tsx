import React from 'react';
import './App.css';
import {ShowAllComponents} from "../../n2-features/f5-allComponents/ShowAllComponents";
import {Header} from "./header/header";
import {Main} from "./main/main";
import {Route} from "react-router-dom";


const App = () => {
    return (
        <div className="App">
            //hr//prov
            <Header/>
            <div>
                    {/*<Route path={'/main'} children={<Main/>}/>*/}

                <ShowAllComponents/>
            </div>
        </div>
    );
}

export default App;
