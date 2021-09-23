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

const UserItem1 = (props) => {
    const classes = useStyles();
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

    let subscribe = () => {
        alert('subscribed');
    }

    let unsubscribe = () => {
        alert('unsubscribe');
    }

    const clickUserHandler = async () => {
        try {
            const data = await request(`/api/profile/profile/` + id, 'GET');
            //console.log('Data1', data);
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
                {props.followed
                    ? <ListItemSecondaryAction>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                            label="Подписаться" onClick={subscribe}
                        />
                    </ListItemSecondaryAction>
                    : <ListItemSecondaryAction>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                            label="Отписаться" onClick={unsubscribe}
                        />
                    </ListItemSecondaryAction>
                }
            </ListItem>
        </>
    )
}

export default UserItem1;