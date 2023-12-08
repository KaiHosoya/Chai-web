import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Box, Container, CssBaseline, Typography, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";
import axios from "axios";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Chai
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password
    }

    await axios.post('http://localhost:3000/api/v1/users/login', data)
    .then((res) => {
      console.log('res: ', res)
      navigate('/', {
        state: {
          user: res.data.data
        }
      })
    })
    .catch((err) => {
      console.log('error: ', err)
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={(e) => {setEmail(e.target.value)}} 
          />
          <TextField
            margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={(e) => {setPassword(e.target.value)}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />} label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}

export default SignIn;