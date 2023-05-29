import React from "react";
import { Fragment } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'

const ImgUrl = "https://image.shutterstock.com/image-photo/image-260nw-657889684.jpg"

const NavBar = () => {

    return (
        <Fragment>
            <header>
                <nav>
                    <img src={ImgUrl} alt="imagen/logo" className="logo" />
                    <ul>
                        <li>
                            <span> Login </span>
                        </li>
                        <li className="search">
                            <span>
                                <FontAwesomeIcon icon={faSearchengin} />
                            </span>
                        </li>
                        <li className="hamburguer">
                            <span>
                                <div className="bar"> </div>
                            </span>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>

    )
};

export default NavBar;