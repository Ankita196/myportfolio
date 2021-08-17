import React from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import profile1 from "./profile1.jpg";
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
       border:"solid",
       borderColor:"#c51162"
   }
 },
  

  image:{

    width:150,
    height:150,
    justifyContent:'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:50,

    
  },
  heading:{

   
    width:"auto",
    height:100,
    justifyContent:'center',
    justifyItems:'center',
    display: 'flex',
    flexDirection:"column",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:50,
    padding:"auto",
    backgroundColor:"none",
    
    borderRadius:'5%'
   
   
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "#f5f5f5",
   
    fontFamily:'cursive',
    backgroundColor:"rgb(4, 5, 12)",
    
    
  },
  
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
      <Avatar alt="profile" src={profile1}  className={classes.image} position="fixed"></Avatar>
     
      
      
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{fontSize:20}}>Hello there! 
          </Paper>
          <Paper className={classes.paper}style={{fontSize:25}}> I am <span style={{fontSize:40,color:"#c51162",fontWeight:"bolder"}}>Ankita Makade </span>
          </Paper>
          <Paper className={classes.paper} style={{fontSize:25}} > I am Front-End Developer. I Love to Create Different UI .
          </Paper>
          {/* <Paper className={classes.paper} style={{fontSize:20}}> Love to Learn and Implement the Things
          </Paper> */}
            <div className={classes.avtar}>
         <Avatar style={{fontSize:40, color:"black",height:50,width:50}} ><a href="https://github.com/Ankita196"  target="_blank" style={{ textDecoration: 'none', color: 'black' }}><GitHubIcon  style={{ fontSize: 40 }} /></a></Avatar>
          <Avatar style={{fontSize:40, color:"black",height:50,width:50}} ><a href="https://www.linkedin.com/in/ankita-makade"  target="_blank" style={{ textDecoration: 'none', color: 'black' }}><LinkedInIcon style={{ fontSize: 40 }}  /></a></Avatar>
         
          <Avatar style={{fontSize:40, color:"black",height:50,width:50}}><a href="https://www.instagram.com/ankita_makade_"  target="_blank" style={{ textDecoration: 'none', color: 'black' }}><InstagramIcon style={{ fontSize: 40 }} /></a></Avatar>
    </div>
        </Grid>
        </Grid> 
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
        
    </div>
  );
}
