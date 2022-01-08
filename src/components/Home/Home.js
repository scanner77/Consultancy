import React from 'react' 
import { Button, Card, CardActions, CardMedia, Typography, CardContent, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import './HomeElements.css'
import TopConsultancies from '../BestConsultancies/topConsultancies'
import Jobs from '../Jobs/Jobs'

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        minWidth: 100,
        margin: "1rem",
        
    },
    media: {
        height: 140,
        }
})

const Home = () => {
    const classes = useStyles();
    return (
        <>
        <br/>
        <div className='main_main_div'>
        <div className = "opt_div">
        <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/HomePageImages/opt.png" title = "OPT" />
                <CardContent>
                    <Typography gutterBottom variant = "h5" component="h2">
                            Optional Practical Training  (OPT)
                    </Typography>
                    <Typography gutterBottom variant = "body2" color="textSecondary" component="p">
                            Lorem Ipsum
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size = "small" color = "primary">
                    Share
                </Button>
                <Button size = "small" color = "primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
        </div>
        <div className = "h1b_div">
        <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/HomePageImages/h1b.jpg" title = "H1B" />
                <CardContent>
                    <Typography gutterBottom variant = "h5" component="h2">
                            Multiple Entry Non-Immigrant Visa (H1B)
                    </Typography>
                    <Typography gutterBottom variant = "body2" color="textSecondary" component="p">
                            Lorem Ipsum
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size = "small" color = "primary">
                    Share
                </Button>
                <Button size = "small" color = "primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
        </div>
    </div>
    <br/>

      
    <section className = "christmas_time">
        <h2 style = {{
            color: 'white', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',

    }}>Merry Christmas</h2>
     <div className="leaf">
     <div>  
         <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" alt = "img" height="75px" width="75px"></img></div>
      <div>
          <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"  alt = "img" height="75px" width="75px"></img></div>
      <div>  
          <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png"  alt = "img" height="75px" width="75px" ></img></div>
      <div>
          <img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"  alt = "img" height="75px" width="75px"></img></div>
       <div> 
           <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png"  alt = "img" height="75px" width="75px"></img></div>
     <div>   
         <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png"  alt = "img" height="75px" width="75px" /></div>
     <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png"  alt = "img" height="75px" width="75px"/></div>
            
     </div>
     
     <div className="leaf leaf1">
     <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png"  alt = "img" height="75px" width="75px"></img></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"  alt = "img" height="75px" width="75px"></img></div>
      <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png"  alt = "img" height="75px" width="75px" ></img></div>
      <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"  alt = "img" height="75px" width="75px"></img></div>
       <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png"  alt = "img" height="75px" width="75px"></img></div>
     <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png"  alt = "img" height="75px" width="75px"/></div>
     <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png"  alt = "img" height="75px" width="75px"/></div>
            
     </div>
     
     <div className="leaf leaf2">
     <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" alt = "img" height="75px" width="75px"></img></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" alt = "img"  height="75px" width="75px"></img></div>
      <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" alt = "img"  height="75px" width="75px" ></img></div>
      <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" alt = "img"  height="75px" width="75px"></img></div>

       <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" alt = "img"  height="75px" width="75px"></img></div>
     <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" alt = "img"  height="75px" width="75px"/></div>
     <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" alt = "img"  width="75px" /> </div>
            </div>

     </section>
    <div>
    </div>

    <TopConsultancies />

    <br/>

    <Jobs />

        </>
    )
}

export default Home;




