import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:20,
    
    
  },
  paper: {
    padding: theme.spacing(2),
    height:350,
    width:300,
    textAlign: 'left',
    color:"#f5f5f5",
    backgroundColor:"rgb(4, 5, 12)",
    border:"solid",
    borderColor:"#ffb300"
  },
  title:{
    
    color: "#f5f5f5",
    fontFamily: ["Comic Sans MS", "Comic Sans"], 
   
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
   
  },
  title1:{
    
    color: "#ffb300",
    fontFamily:  ["Comic Sans MS", "Comic Sans"], 
    
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
    fontFamily: ["Comic Sans MS", "Comic Sans"],
    backgroundColor:"rgb(4, 5, 12)",
  },
  avtar:{
    display: 'flex',
    justifyContent:"center",
    
   '& > <ArrowRightIcon style={{fontSize:20}} />': {
     margin: theme.spacing(2),
    
 }
},
   
  
}));

export default function Education() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6} className={classes.avtar}>
        
        <Grid item xs={12}   ><br/><br/><br/>
        <Paper className={classes.heading} style={{fontSize:50,fontWeight:"bold"}} > Education
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} > 
          <Paper className={classes.paper}><Typography className={[classes.title,classes.title1]} variant="h6" >
           Bachelor of Engineering
           </Typography><br/><br/>
          
           <Typography className={classes.title} variant="h7" >
          <ArrowRightIcon style={{fontSize:20}} /> Institute  <br/>J D College of Engineering and Management ,Nagpur
           </Typography>
           <br />
           <Typography className={classes.title} variant="h7" >
           <ArrowRightIcon style={{fontSize:20}}/>University<br/> Rashtrasant Tukdoji Maharaj University ,Nagpur
           </Typography><br/>
           <Typography className={classes.title} variant="h7" >
           <ArrowRightIcon style={{fontSize:20}}/>Branch  <br/> Electrical Engineering
           </Typography><br />
           <Typography className={classes.title} variant="h7" >
           <ArrowRightIcon style={{fontSize:20}}/>CGPA <br/>8.95
           </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={3}> 
          <Paper className={classes.paper}><Typography className={[classes.title,classes.title1]} variant="h6" >
           Higher Secondary School Certificate
           </Typography><br/>
           
           <Typography className={classes.title} variant="h7" >
          <ArrowRightIcon style={{fontSize:20}} />Institute <br/>Lok Jeevan Vidyalay ,Bela
           </Typography>
           <br />
           <Typography className={classes.title} variant="h7" >
          <ArrowRightIcon style={{fontSize:20}} />Board<br/> Maharashtra State Board,Pune
           </Typography><br/>
           <Typography className={classes.title} variant="h7" >
          <ArrowRightIcon style={{fontSize:20}} />Percentage <br/>78%
           </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Paper className={classes.paper}><Typography className={[classes.title,classes.title1]} variant="h6" >
           Secondary Secondary School Certificate
           </Typography><br/>
           
           <Typography className={classes.title} variant="h7" >
          <ArrowRightIcon style={{fontSize:20}} />Institute <br/>Vimlabai Tidke Vidyalay ,Bela
           </Typography>
           <br />
           <Typography className={classes.title} variant="h7" >
          <ArrowRightIcon style={{fontSize:20}} />Board<br/> Maharashtra State Board,Pune
           </Typography><br/>
           <Typography className={classes.title} variant="h7" >
          <ArrowRightIcon style={{fontSize:20}} />Percentage <br/>84%
           </Typography>
          </Paper>
        </Grid>
       
        
        
      </Grid>
    </div>
  );
}