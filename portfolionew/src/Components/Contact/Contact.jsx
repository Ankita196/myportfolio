import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:20,
    
    
  },
  paper: {
    padding: theme.spacing(2),
   
   
    textAlign: 'center',
    color:"#f5f5f5",
    backgroundColor:"rgb(4, 5, 12)",
   
  },
  title:{
    
    color: "#f5f5f5",
    fontFamily: ["Lucida Console","Courier"], 
    
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
   
  },
  title1:{
    
    color: "#ffb300",
    fontFamily: ["Comic Sans MS", "Comic Sans"], 
   
    fontSize:20,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
   
  },

  heading:{
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "#ad1457",
    
   justifyContent:'center',
    fontFamily:["Comic Sans MS", "Comic Sans"],
    backgroundColor:"rgb(4, 5, 12)",
  },
  avtar:{
    display: 'flex',
    justifyContent:"center",
    
   '& > <ArrowRightIcon style={{fontSize:20}} />': {
     margin: theme.spacing(2),
    
 }
},
title:{
    
    color: "#f5f5f5",
    fontFamily: ["Lucida Console","Courier"], 
    
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize:20
   
  },
   
  
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.avtar}>
        
        <Grid item xs={12}   ><br/><br/><br/>
        <Paper className={classes.heading} style={{fontSize:50,fontWeight:"bold"}} > Contact
          </Paper>
        </Grid>
        
        <Grid item xs={12}  > <br/><br/><br/>
          <Paper className={[classes.paper,classes.title]}><LocationOnIcon style={{fontSize:20}}/>At Post Bela ,Tah-Umrer ,District-Nagpur,Maharashtra-441108
          </Paper>
        </Grid>
       
        <Grid item xs={12}  > 
          <Paper className={[classes.paper,classes.title]} ><ContactPhoneIcon style={{fontSize:20, paddingLeft:1}}/>  7888137148
          </Paper>
        </Grid>
       
          
        <Grid item xs={12} > 
          <Paper className={[classes.paper,classes.title]}  >   <ContactMailIcon style={{fontSize:20}}/>muskanmakde1999@gmail.com
          </Paper>
        </Grid>
        
      
        
        
       
      
       
       
        
        
      </Grid>
    </div>
  );
}