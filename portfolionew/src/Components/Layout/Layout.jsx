import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import profile1 from "./profile1.jpg"; 
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme)=>({ 
  list: {
    width: 200,
    paddingLeft:10,
    justifyContent:'center',
    justifyItems:'center',
    color: '#263238',
    fontFamily: ["Lucida Console","Courier New"], 
    fontWeight:'bold',
    display: 'block',
    marginLeft: 10,
    marginRight: 'auto',
    

  },
  title:{
    
    color: '#263238',
    fontFamily: ["cursive",'Lucida Console',"Courier New"], 
    fontWeight:'bold',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    
   
  },
  image:{

    width:100,
    height:100,
    justifyContent:'center',
    display: 'block',
    marginLeft: 20,
    marginRight: 'auto',
    marginTop:70,

    
  },
  menuButton: {
    display:"flex",
    paddingLeft:50,

    

  },
  
  fullList: {
    width: 'auto',
    
  },
}));

export default function Layout() {
  const classes = useStyles();
  const [state, setState] = React.useState({
   
    left: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Avatar alt="profile" src={profile1}  className={classes.image} position="fixed"></Avatar>
        <br/>
        <Divider ></Divider>
      <List className={classes.list}>
      <ListItemText > <Typography className={classes.title} variant="h6" >
          Home
           </Typography></ListItemText> <br/>
      <ListItemText > <Typography className={classes.title} variant="h6" >
          About Me
           </Typography></ListItemText><br/>
      <ListItemText > <Typography className={classes.title} variant="h6" >
          Education
           </Typography></ListItemText><br/>
      <ListItemText > <Typography className={classes.title} variant="h6" >
          Skills
           </Typography></ListItemText><br/>
      <ListItemText > <Typography className={classes.title} variant="h6" >
           Project's
           </Typography></ListItemText><br/>
      <ListItemText > <Typography className={classes.title} variant="h6" >
           Contact
           </Typography></ListItemText>

      </List>
      
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor} style={{backgroundColor:"blue"}}>
         
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" onClick={toggleDrawer(anchor, true)} >
           
            <MenuIcon style={{ fontSize: 50 , color:"white"}} />
            
          </IconButton >
          <SwipeableDrawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
