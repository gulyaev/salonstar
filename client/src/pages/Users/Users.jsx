import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import UserItem from "../UserItem/UserItem";
const axios = require('axios').default;


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '72ch',
        backgroundColor: theme.palette.background.paper,
        margin: '10px 0px',
    },
    inline: {
        display: 'inline',
    },
    btnbtn: {
        margin: '8px 0px'
    }
}));

export default function Users(props) {
    let getUsers = () => {
        if (props.usersData.length === 0) {
            axios.get('/api/users/getusers')
                .then(res => {
                    console.log(res.data);
                    props.setUsers(res.data);
                })
                .catch(err => {
                    // Handle Error Here
                    console.error(err);
                });
        }
    }

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber)
    }


    const classes = useStyles();

    let usersElements = props.state.usersPage.usersData.map(user => (<UserItem name={user.name} id={user._id} image={user.userImage} />));

    let pagesCount = Math.ceil(props.state.usersPage.totalUsersCount / props.state.usersPage.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    debugger 
    return (
        <>
            <div className={classes.btnbtn} onClick={getUsers}>
                <a class="waves-effect waves-light btn" ><i class="material-icons right"><span class="material-icons" >open_in_browser</span></i>Показать пользователей</a>
            </div>
            <ul class="pagination">
                <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                {pages.map(p => {return <li class={props.currentPage === p && "active"} onClick={(e)=>{onPageChanged(p)}}><a href="#!">{p}</a></li> })}
                <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
            </ul>
            <List className={classes.root}>
                {usersElements}
                <Divider variant="inset" component="li" />
            </List>
        </>
    );
}