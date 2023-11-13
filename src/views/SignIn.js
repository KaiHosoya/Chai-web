import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Container, CssBaseline, Typography, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";

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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"), password: data.get("password")
    });
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
            margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus
          />
          <TextField
            margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
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