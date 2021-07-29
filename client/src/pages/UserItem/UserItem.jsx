import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    }
}));

const UserItem = (props) => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        alert('subscribed');
    };

    let path = "/user/" + props.id;

    let subscribe =()=>{
        //alert('subscribed');
    }

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={props.image} />
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