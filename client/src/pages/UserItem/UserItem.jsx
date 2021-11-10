import React from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';


const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline'
    }
}));

const UserItem = (props) => {
    const classes = useStyles();
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();
    const linkId = useParams().id;
    const id = props.id;

    const [state, setState] = React.useState({
        checkedA: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        alert('subscribed');
    };

    let path = "/user/" + props.id;

    let subscribe = () => {
        alert('subscribed');
    }

    const clickUserHandler = async () => {
        //alert("Клик по юзеру");
        try {
            alert("Начало");
            const data = await request(`/api/profile/profile/618a239e81d859067dee8893`, 'GET');
            console.log('Data', data);
            //message(data.message);
            alert("Конец");
        } catch (e) {

        }
    }

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <NavLink to={"/profile/" + props.id} onClick={clickUserHandler}><Avatar alt="Remy Sharp" src={props.image} /></NavLink>
                </ListItemAvatar>
                <ListItemText
                    primary={props.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"

                            >
                                {props.name}
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ListItemSecondaryAction>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        label="Подписаться" onClick={subscribe}
                    />
                </ListItemSecondaryAction>

            </ListItem>
        </>
    )
}

export default UserItem;