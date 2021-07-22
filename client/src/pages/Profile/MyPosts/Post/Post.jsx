import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Post(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = () => () => {
    const currentIndex = checked.indexOf();
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push();
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense className={classes.root}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${ + 1}`}
                src={"../../images/avamain.jpeg"}
              />
            </ListItemAvatar>
            <ListItemText primary={ props.message } />
            <ListItemSecondaryAction>
            </ListItemSecondaryAction>
          </ListItem>
    </List>
  );
}

export default Post;