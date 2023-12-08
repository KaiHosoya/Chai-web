import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Box, Container, CssBaseline, Grid, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© "}
      <Link color="inherit" href="#">
        Chai
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      'name': name,
      'email': email,
      'password': password
    }

    await axios.post('http://localhost:3000/api/v1/users', 
      data
    )
    .then((res) => {
      console.log('res: ', res)
      navigate('/', { state: { user: res.data.data }})
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component={"form"} onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField required fullWidth id="lastName" label="Name" name="lastName" autoComplete="family-name" onChange={(e) => {setName(e.target.value)}}/>
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange={(e) => {setEmail(e.target.value)}}/>
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" onChange={(e) => {setPassword(e.target.value)}}/>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>        

  );
}

export default SignUp;