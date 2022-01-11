import React from 'react';
import { IoBeer } from "react-icons/io5";
function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <a className="navbar-brand text-warning" to="/">
                    <IoBeer />  PunkAPI
                </a>
            </div>
        </nav>
    );
}
export default Nav;