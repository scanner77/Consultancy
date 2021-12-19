import React from 'react'
import {Grid} from "@material-ui/core"
import { Button, Card, CardActions, CardMedia, Typography, CardContent, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

// import { Button, Card, CardActions, CardMedia, Typography, CardContent, CardActionArea } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 100,
        margin: "1rem",
        
    },
    media: {
        height: 140,
        }
})


export const topConsultancies = () => {
    const classes = useStyles;
    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* ===First====== */}
        <div className = "top_5_cons">
            <div>
<Grid>
  <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/image/h1b.jpg" title = "H1B" />
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
  </Grid>
</div>
<div>
  {/* =====Second======= */}
  <Grid>
  <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/image/h1b.jpg" title = "H1B" />
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
  </Grid>
</div>

<div>
  {/* ======Third===== */}
  <Grid>
  <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/image/h1b.jpg" title = "H1B" />
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
  </Grid>
</div>

  {/* ======Fourth===== */}

{/* <div>
  <Grid>
  <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/image/h1b.jpg" title = "H1B" />
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
  </Grid>
</div> */}


  {/* ========Fifth======= */}
  
  {/* <div> 
   <Grid>
  <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/image/h1b.jpg" title = "H1B" />
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
  </Grid>
  </div> */}
  </div>
  </>
        )
}

export default topConsultancies




/* 

<div className = "main_main_div">
            <div>
            <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/image/opt.png" title = "OPT" />
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
            <div>
            <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/image/opt.png" title = "OPT" />
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
            <div>
            <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/image/opt.png" title = "OPT" />
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
            <div>
            <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia style = {{backgroundSize: 'cover'}} className = {classes.media} image = "/image/opt.png" title = "OPT" />
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
        </div>

*/