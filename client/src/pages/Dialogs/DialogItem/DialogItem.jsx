import React from 'react';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <>
            <li className="collection-item avatar">
                <img src={props.image} alt="" class="circle"></img>
                <NavLink to={path} className="title black-text">{props.name}</NavLink>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        </>
    )
}

export default DialogItem;