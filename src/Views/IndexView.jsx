import React from "react";
import './ViewCss/IndexView.css';
import { Fragment } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Parallax from "../Components/Parallax/Parallax";



const IndexView = () => {
    return (
        <Fragment>
           <div className="Body">
                <NavBar/>
                <Parallax/>
            </div> 
        </Fragment>
      );
}

export default IndexView;