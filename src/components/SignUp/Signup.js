import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import {Link as LinkSignUp} from 'react-router-dom'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <LinkSignUp color="inherit" to ="/login">
        <b>Consultancy Finder</b>
      </LinkSignUp>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const[firstName, setFirstname] = useState('');
  const[lastName, setLastname] = useState('');
  const[email, setEmail] = useState('');
  const[userName, setUsername] = useState('');
  const[password, setPassword] = useState('');




  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = {firstName, lastName, email, userName, password}
    // console.log(data)
    // fetch(`http://localhost:8080/signUp`,  {
    //   method: 'POST',
    //   headers: {"Content-Type":"application/json", 'Accept' : 'application/json'},
    //   body: JSON.stringify({data})
    // }).then(res => res.json())
    const data = {

      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, userName: userName, password: password})
    }
    fetch('http://localhost:8080/api/signUp', data)
    .then()

    navigate('/login');

    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value = {firstName}
                  onChange={(e)=> setFirstname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value = {lastName}
                  onChange={(e)=> setLastname(e.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value = {email}
                  onChange={(e)=> setEmail(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="username"
                  label="Username"
                  type="username"
                  id="username"
                  autoComplete="new-username"
                  value = {userName}
                  onChange={(e)=> setUsername(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value= {password}
                  onChange={(e)=> setPassword(e.target.value)}

                />
              </Grid>
            </Grid>
            <br/>
            <br/>
            <Button
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >Submit</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkSignUp to = "/login" variant="body2">
                  Already have an account? Sign in
                </LinkSignUp>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <br/>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}