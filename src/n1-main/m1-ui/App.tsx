import React from 'react';
import './App.css';
import {ShowAllComponents} from "../../n2-features/f5-allComponents/ShowAllComponents";
import {Header} from "./header/header";
import {Main} from "./main/main";

const App = () => {
  return (
    <div className="App">
      //hr//prov
      <>
        <Header/>
        <Main/>
        <ShowAllComponents/>
      </>
    </div>
  );
}

export default App;
