import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    debugger;
    return (
        <>
            <li className="collection-item avatar">
                <img src={props.image} alt="" class="circle"></img>
                <NavLink to={path} className="title">{props.name}</NavLink>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        </>
    )
}

export default DialogItem;