import React from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    marginTop:30
   
    
  },

  title:{
    
   
     
    fontWeight:'bold',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    textShadow:2,
  },

 
    avtar:{
      display: 'flex',
      justifyContent:"center",
      
     '& > *': {
       margin: theme.spacing(2),
       
   }
 },
  

  
  
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "#f5f5f5",
    
   justifyContent:'center',
    fontFamily:'cursive',
    backgroundColor:"rgb(4, 5, 12)",
    
    
  },
  heading:{
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "#ad1457",
    
   justifyContent:'center',
    fontFamily:'cursive',
    backgroundColor:"rgb(4, 5, 12)",
  }
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
     
     
      
      
        <Grid item xs={12}>
        <Paper className={classes.heading} style={{fontSize:50,fontWeight:"bold"}} > Skills 
          </Paper><br/><br/><br/><br/>
          <Paper className={classes.paper} style={{fontSize:25}} > I am  Proficient in developing web pages and single page application <br/>using HTML ,CSS ,Bootstrap,Material-Ui,React js,Jvascript
          </Paper> </Grid>
          {/* <Paper className={classes.paper} style={{fontSize:20}}> Love to Learn and Implement the Things
          </Paper> */}
            <Grid xs={12} style={{display:"flex" }} className={classes.paper} container spacing={1}>
            <Paper className={classes.paper}> <a  href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a><br /> </Paper>
            <Paper className={classes.paper}>  <a  href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" /> </a><br /> </Paper>
            <Paper className={classes.paper}>  <a  href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a><br /> </Paper>
            </Grid>
            <Grid xs={12} style={{display:"flex"}} className={classes.paper} container spacing={1}>
            <Paper className={classes.paper}>  <a  href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a><br /> </Paper>
            <Paper className={classes.paper}> <a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a><br /> </Paper>
                    
            <Paper className={classes.paper}>    <a  href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a><br /></Paper>
                   
            </Grid>
        </Grid>
        
    </div>
  );
}



