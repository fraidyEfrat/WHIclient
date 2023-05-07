import React, { useState , useContext} from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import { InputLabel,Input,InputAdornment,IconButton } from '@material-ui/core';
import { Visibility,VisibilityOff } from '@mui/icons-material';
import { AuthContext } from "../../context/authContex";


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

const Login = () => {


    //TODO:: maybe add logout logic here
    //when there is no token , user is logged out
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(null);
    const { setRole, setIduser } = useContext(AuthContext);
    const classes = useStyles();

  
    
  

const [showPassword, setShowPassword] = useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};


const login = async () => {
    const res = await axios.post("http://localhost:3600/api/auth/login", { email, password }, {
      withCredentials: true,//in order to add cookies to api
    });
    console.log(res.data);
    sessionStorage.setItem("token", res.data.accessToken)
    sessionStorage.setItem("user name", res.data.user.firstName)
    sessionStorage.setItem("role", res.data.user.role)
    console.log(res.data.accessToken);
    setRole(res.data.user.role);
  }

  const handleClick = async () => {

    console.log("in handleClick");
    try {
      console.log("in try login");
      await login();

    }
    catch (err) {
      setErr(err.response.data?.message);
    }
  }
  
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>Register</Typography>
      <form onSubmit={login} className={classes.form}>
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
              label="Password"
            //   variant="outlined"
            type={showPassword ? 'text' : 'password'}
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
          <button onClick={handleClick}>login</button>
        
             </form>
             </div>
             )}

             export default Login