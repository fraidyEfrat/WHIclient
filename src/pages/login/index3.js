import * as React from 'react';
import axios from "axios";
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
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useContext,useState } from "react";
import { AuthContext } from "../../context/authContex";
import { InputLabel,Input,InputAdornment,IconButton } from '@material-ui/core';
import { Visibility,VisibilityOff } from '@mui/icons-material';
import Modal from '@material-ui/core/Modal';
import register from '../register/index3'

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
};

const theme = createTheme();

const LoginDetails = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(null);
    const { setRole, setIduser } = useContext(AuthContext);
    const [open, setOpen] = useState(true);


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
 



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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // return (
  //   <div>
  //   <Modal
  //   open={open}
  //   onClose={handleClose}
  //   aria-labelledby="modal-modal-title"
  //   aria-describedby="modal-modal-description">
  //   <Box sx={style}>
  //   <ThemeProvider theme={theme}>
  //     <Container component="main" maxWidth="xs">
  //       <CssBaseline />
  //       <Box
  //         sx={{
  //           marginTop: 8,
  //           display: 'flex',
  //           flexDirection: 'column',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
  //           <LockOutlinedIcon />
  //         </Avatar>
  //         <Typography component="h1" variant="h5">
  //           Sign in
  //         </Typography>
  //         <Box component="form" noValidate sx={{ mt: 1 }}>
  //           <TextField
  //             margin="normal"
  //             required
  //             fullWidth
  //             onChange={(e) => { setEmail(e.target.value) }}
  //             id="email"
  //             label="email"
  //             name="email"
  //             autoComplete="email"
  //             autoFocus
  //           />
  //           <TextField
  //             margin="normal"
  //             required
  //             fullWidth
  //             onChange={(e) => { setPassword(e.target.value) }}
  //             name="password"
  //             label="Password"
  //                 type={showPassword ? 'text' : 'password'}
  //             id="password"
  //             autoComplete="current-password"
  //             InputProps={{
  //               startAdornment: (
  //                   <IconButton
  //                   aria-label="toggle password visibility"
  //                   onClick={handleClickShowPassword}
  //                   onMouseDown={handleMouseDownPassword}
  //                 >
  //                   {showPassword ? <VisibilityOff /> : <Visibility />}
  //                 </IconButton>
  //               ),
  //             }}
  //           />
  //           <FormControlLabel
  //             control={<Checkbox value="remember" color="primary" />}
  //             label="Remember me"
  //           />
  //           <Button
  //             type="button"
  //             fullWidth
  //             variant="contained"
  //             sx={{ mt: 3, mb: 2 }}
  //             onClick={handleClick}
  //           >
  //             Sign In
  //           </Button>
  //           <Grid container>
  //             <Grid item xs>
  //             </Grid>
  //             <Grid item>
  //               <NavLink to='/register' variant="body2">
  //                 {"Don't have an account? Sign Up"}
  //               </NavLink>
  //             </Grid>
  //           </Grid>
  //         </Box>
  //       </Box>
  //       <Copyright sx={{ mt: 8, mb: 4 }} />
  //     </Container>
  //   </ThemeProvider>
  //   </Box>
  //    </Modal>
  //    </div>
  // );
  return (
   
    <Box sx={style}>
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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => { setEmail(e.target.value) }}
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => { setPassword(e.target.value) }}
              name="password"
              label="Password"
                  type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <NavLink to='/register' variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </Box>
  );
}
export default LoginDetails;