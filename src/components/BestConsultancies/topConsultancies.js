import * as React from 'react';
import "./topConsultancies.css"
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/core/Icon';
import ShareIcon from '@material-ui/core/Icon';
import ExpandMoreIcon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper'
import {Grid} from '@material-ui/core'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Paper style = {{
          width: '30%', 
          lineHeight: '40px', 
          fontSize: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
          
          }}><b>Top Consultancies</b> </Paper>
      <br/>

    <Grid container spacing={3} className='top_consultancies'>
    <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img style = {{height: '40px', width: '40px', backgroundSize: 'cover'}} src = "ConsultancyImages/Takeo.png" alt = "Takeo.ai"/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Takeo"
        subheader="264 W 40th St suite 503, New York, NY 10018" 
      />
      <CardMedia
        component="img"
        height="194"
        image="ConsultancyImages/TakeoCover.png"
        alt="Takeo.ai"
      />
      <CardContent>
        <Typography variant="body2" color="secondary">
        Takeo is a privately owned AI, Cloud Implementation and Consulting technology business. 
        Today we're proud to boast a strong team of engineers who thrive on rolling up their 
        sleeves and solving your complex challenges and meeting your business needs.
        </Typography>
      </CardContent>
      <CardActions disableSpacing style = {{color: 'black'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            <h3>Mission</h3>
            Building on our technologies and competencies and creating values
             from our customers by being the most innovative and client-centric 
             company in the world.
          </Typography>
          <Typography paragraph>
          The team at Takeo serviced two dozen clients to help our clients stay ahead
           of market changes, forecast faster, embrace the cloud to accelerate innovation
           and business value, protect data and infras, manage it & support and strategize
          business growth.
          </Typography>
          <Typography>
          Takeo Solution’s leadership team has a long history of success 
          in technology and business management
        </Typography>
        </CardContent>
      </Collapse>
    </Card>

    
    <br/>
    <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img style = {{height: '40px', width: '40px', backgroundSize: 'cover'}} src = "ConsultancyImages/CodeGravity.jpg" alt = "Code Gravity"/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Code Gravity"
        subheader="600 E John Carpenter Fwy Suite # 357, Irving, TX"
      />
      <CardMedia
        component="img"
        height="194"
        image="ConsultancyImages/CodeGravityCover.jpg"
        alt="Code Gravity"
      />
      <CardContent>
        <Typography variant="body2" color="secondary">
        Takeo is a privately owned AI, Cloud Implementation and Consulting technology business. 
        Today we're proud to boast a strong team of engineers who thrive on rolling up their 
        sleeves and solving your complex challenges and meeting your business needs.
        </Typography>
      </CardContent>
      <CardActions disableSpacing style = {{color: 'black'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon color = "primary"/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            <h3>Mission</h3>
            Building on our technologies and competencies and creating values
             from our customers by being the most innovative and client-centric 
             company in the world.
          </Typography>
          <Typography paragraph>
          The team at Takeo serviced two dozen clients to help our clients stay ahead
           of market changes, forecast faster, embrace the cloud to accelerate innovation
           and business value, protect data and infras, manage it & support and strategize
          business growth.
          </Typography>
          <Typography>
          Takeo Solution’s leadership team has a long history of success 
          in technology and business management
        </Typography>
        </CardContent>
      </Collapse>
    </Card>




        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img style = {{height: '40px', width: '40px', backgroundSize: 'cover'}} src = "ConsultancyImages/CodeGravity.jpg" alt = "Code Gravity"/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Code Gravity"
        subheader="600 E John Carpenter Fwy Suite # 357, Irving, TX"
      />
      <CardMedia
        component="img"
        height="194"
        image="ConsultancyImages/CodeGravityCover.jpg"
        alt="Code Gravity"
      />
      <CardContent>
        <Typography variant="body2" color="secondary">
        Takeo is a privately owned AI, Cloud Implementation and Consulting technology business. 
        Today we're proud to boast a strong team of engineers who thrive on rolling up their 
        sleeves and solving your complex challenges and meeting your business needs.
        </Typography>
      </CardContent>
      <CardActions disableSpacing style = {{color: 'black'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon color = "primary"/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            <h3>Mission</h3>
            Building on our technologies and competencies and creating values
             from our customers by being the most innovative and client-centric 
             company in the world.
          </Typography>
          <Typography paragraph>
          The team at Takeo serviced two dozen clients to help our clients stay ahead
           of market changes, forecast faster, embrace the cloud to accelerate innovation
           and business value, protect data and infras, manage it & support and strategize
          business growth.
          </Typography>
          <Typography>
          Takeo Solution’s leadership team has a long history of success 
          in technology and business management
        </Typography>
        </CardContent>
      </Collapse>
    </Card>

    </Grid>
    </>
  );
}