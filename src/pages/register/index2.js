import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PhoneIcon from '@material-ui/icons/Phone';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { LocationCity } from '@mui/icons-material';
import { InputLabel,Input,InputAdornment,IconButton } from '@material-ui/core';
import { Visibility,VisibilityOff } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(4),
  },
  form: {
    maxWidth: 600,
    margin: '0 auto',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [watsup, setWatsup] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(1);
  const [err, setErr] = useState(null);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = async (e) => {
    setErr("");
    e.preventDefault();

    

    try {
      const res = await axios.post("http://localhost:3600/api/auth/register", { firstName, lastName, email, city, dateOfBirth, address, id, phone, watsup, password, role });
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      setErr(err.response.data?.message);
    }
  };
  
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>Register</Typography>
      <form onSubmit={handleRegister} className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <PersonIcon />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <PersonIcon />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <EmailIcon />
                ),
              }}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputField}
              label="City"
            //   variant="outlined"
              fullWidth
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              InputProps={{
                startAdornment: (
                  <LocationCity color="action" />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            type='date'
              className={classes.inputField}
              label="birthday"
            //   variant="outlined"
              fullWidth
              required
            //   value={"                     "+dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            //   InputProps={{
            //     startAdornment: (
            //       <DateRangeIcon color="action" />
            //     ),
            //   }}
            />
          </Grid> <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputField}
              label="Address"
            //   variant="outlined"
              fullWidth
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              InputProps={{
                startAdornment: (
                  <LocationCityIcon color="action" />
                ),
              }}
            />
          </Grid> 
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputField}
              label="ID"
            //   variant="outlined"
              fullWidth
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
             
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputField}
              label="Phone"
            //   variant="outlined"
              fullWidth
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              InputProps={{
                startAdornment: (
                  <PhoneIcon color="action" />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputField}
              label="Whatsup"
            //   variant="outlined"
              fullWidth
              required
              value={watsup}
              onChange={(e) => setWatsup(e.target.value)}
              InputProps={{
                startAdornment: (
                  <WhatsAppIcon color="action" />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputField}
              label="Password"
            //   variant="outlined"
            type='password'
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        
             </Grid>
             </form>
             </div>
             )}

             export default Register