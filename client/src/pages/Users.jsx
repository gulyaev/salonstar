import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import UserItem from "./UserItem/UserItem";
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

    const classes = useStyles();

    let usersElements = props.state.usersPage.usersData.map(user => (<UserItem name={user.name} id={user._id} image={user.userImage} />));

    return (
        <>
            <div className={classes.btnbtn} onClick={getUsers}>
                <a class="waves-effect waves-light btn" ><i class="material-icons right"><span class="material-icons" >open_in_browser</span></i>Показать пользователей</a>
            </div>
            <List className={classes.root}>
                {usersElements}
                <Divider variant="inset" component="li" />
            </List>
        </>
    );
}