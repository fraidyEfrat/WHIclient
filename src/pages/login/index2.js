// import React, { useState , useContext} from 'react';
// import axios from "axios";
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import EmailIcon from '@material-ui/icons/Email';
// import { InputLabel,Input,InputAdornment,IconButton } from '@material-ui/core';
// import { Visibility,VisibilityOff } from '@mui/icons-material';
// import { AuthContext } from "../../context/authContex";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     paddingTop: theme.spacing(4),
//   },
//   form: {
//     maxWidth: 600,
//     margin: '0 auto',
//   },
//   title: {
//     marginBottom: theme.spacing(4),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const Login = () => {


//     //TODO:: maybe add logout logic here
//     //when there is no token , user is logged out
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [err, setErr] = useState(null);
//     const { setRole, setIduser } = useContext(AuthContext);
//     const classes = useStyles();

  
    
  

// const [showPassword, setShowPassword] = useState(false);

// const handleClickShowPassword = () => setShowPassword((show) => !show);

// const handleMouseDownPassword = (event) => {
//   event.preventDefault();
// };


// const login = async () => {
//     const res = await axios.post("http://localhost:3600/api/auth/login", { email, password }, {
//       withCredentials: true,//in order to add cookies to api
//     });
//     console.log(res.data);
//     sessionStorage.setItem("token", res.data.accessToken)
//     sessionStorage.setItem("user name", res.data.user.firstName)
//     sessionStorage.setItem("role", res.data.user.role)
//     console.log(res.data.accessToken);
//     setRole(res.data.user.role);
//   }

//   const handleClick = async () => {

//     console.log("in handleClick");
//     try {
//       console.log("in try login");
//       await login();

//     }
//     catch (err) {
//       setErr(err.response.data?.message);
//     }
//   }
  
//   return (
//     <div className={classes.root}>
//       <Typography variant="h4" className={classes.title}>Register</Typography>
//       <form onSubmit={login} className={classes.form}>
//           <Grid item xs={12} sm={12}>
//             <TextField
//               fullWidth
//               required
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <EmailIcon />
//                 ),
//               }}
//               />
//               </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               className={classes.inputField}
//               label="Password"
//             //   variant="outlined"
//             type={showPassword ? 'text' : 'password'}
//               fullWidth
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                     <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 ),
//               }}
//             />
//           </Grid>
//           <button onClick={handleClick}>login</button>
        
//              </form>
//              </div>
//              )}

//              export default Login

import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const Login=() =>{
    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="login"  onClick={() => setVisible(false)} className="p-button-text" />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
          <br></br> <br></br><br></br><br></br>
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="mb-5">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                    ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <p className="mb-5">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                    maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                    non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="mb-5">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                    ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <p className="mb-5">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                    maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                    non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
            </Dialog>
        </div>
    )
}

        export default Login
