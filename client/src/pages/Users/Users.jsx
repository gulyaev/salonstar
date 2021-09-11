import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '72ch',
        backgroundColor: theme.palette.background.paper,
        margin: '10px 0px'
    },
    inline: {
        display: 'inline'
    },
    btnbtn: {
        margin: '8px 0px'
    }
}));

export default function Users({getUsers, onPageChanged, pages, usersElements}, props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.btnbtn} onClick={getUsers}>
                <a class="waves-effect waves-light btn" ><i class="material-icons right"><span class="material-icons" >open_in_browser</span></i>Показать пользователей</a>
            </div>
            <ul class="pagination">
                <li class="waves-effect" ><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                {pages.map(p => { return <li class={props.currentPage === p && "active"} onClick={(e)=>{onPageChanged(p)}}><a href="#!">{p}</a></li> })}

                <li class="waves-effect" ><a href="#!"><i class="material-icons">chevron_right</i></a></li>
            </ul>
            <List className={classes.root}>
                {usersElements}
                <Divider variant="inset" component="li" />
            </List>
        </>
    );
}