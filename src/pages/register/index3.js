import * as React from 'react';
import Login from '../login/index2';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext,useState } from "react";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { LocationCity } from '@mui/icons-material';
import { InputLabel,Input,InputAdornment,IconButton } from '@material-ui/core';
import { Visibility,VisibilityOff } from '@mui/icons-material';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Register = () => {
  
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [city,setCity]=useState("");
    const [dateOfBirth,setDateOfBirth]=useState("");
    const [address,setAddress]=useState("");
    const [id,setId]=useState("");
    const [phone,setPhone]=useState("");
    const [watsup,setWatsup]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState(1);
  
    const [err, setErr] = useState(null);
    const navigate=useNavigate();
  
  
    const handleRegister=async(e)=>{
      setErr("");
      e.preventDefault();
      try{
        const res= await axios.post("http://localhost:3600/api/auth/register",{firstName,lastName,email,city,dateOfBirth,address,id,phone,watsup,password,role});
   
         console.log("after await");
         console.log(res.data);
         navigate("/login");
       }catch(err){
         setErr(err.response.data?.message);
       }
    }  

    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleRegister} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => { setLastName(e.target.value) }}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  InputProps={{
                    startAdornment: (
                      <PersonIcon color="action" />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  onChange={(e) => { setFirstName(e.target.value) }}
                  id="firstName"
                  label="First Name"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <PersonIcon color="action" />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="phone"
                  required
                  fullWidth
                  onChange={(e) => { setPhone(e.target.value) }}
                  id="phone"
                  label="Phone Number"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <PhoneIcon color="action" />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => { setWatsup(e.target.value) }}
                  name="watsup"
                  id="watsup"
                  label="watsup"
                  InputProps={{
                    startAdornment: (
                      <WhatsAppIcon color="action" />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="city"
                  required
                  fullWidth
                  onChange={(e) => { setCity(e.target.value) }}
                  id="city"
                  label="city"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <LocationCityIcon color="action" />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => { setPassword(e.target.value) }}
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => { setAddress(e.target.value) }}
                  id="Address"
                  label="Address"
                  name="Address"
                // autoComplete="email"
                InputProps={{
                    startAdornment: (
                      <PlaceIcon color="action" />
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => { setEmail(e.target.value) }}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                //   InputProps={{
                //     startAdornment: (
                //       <EmailIcon color="action" />
                //     ),
                //   }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => { setDateOfBirth(e.target.value) }}
                  id="dateOfBirth"
                  label="dateOfBirth"
                  name="dateOfBirth"
                  autoComplete="family-name"
                  type='date'
                
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="id"
                  required
                  fullWidth
                  onChange={(e) => { setId(e.target.value) }}
                  id="id"
                  label="ID"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <NavLink to="/Login" variant="body2">
                  Already have an account? Sign in
                </NavLink> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
export default Register;
