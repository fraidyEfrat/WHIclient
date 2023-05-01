import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../../context/authContex";
// import './login.css';

// //  import { LoginPopup } from "../popup";
// // import { RegisterPopup } from "../popup";

const Login = () => {
  //TODO:: maybe add logout logic here
  //when there is no token , user is logged out
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const { setRole, setIduser } = useContext(AuthContext);


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
    localStorage.setItem("token", res.data.accessToken)
    localStorage.setItem("user name", res.data.user.firstName)
    localStorage.setItem("role", res.data.user.role)
    console.log(res.data.accessToken);
    setRole(res.data.user.role);
  }
//   console.clear();

//   const loginBtn = document.getElementById('login');
//   const signupBtn = document.getElementById('signup');

//   loginBtn.addEventListener('click', (e) => {
//   	let parent = e.target.parentNode.parentNode;
//   	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
//   		if(element !== "slide-up") {
//   			parent.classList.add('slide-up')
//   		}else{
//   			signupBtn.parentNode.classList.add('slide-up')
//   			parent.classList.remove('slide-up')
//   		}
//   	});
//   });

//   signupBtn.addEventListener('click', (e) => {
//   	let parent = e.target.parentNode;
//   	Array.from(e.target.parentNode.classList).find((element) => {
//   		if(element !== "slide-up") {
//   			parent.classList.add('slide-up')
//   		}else{
//   			loginBtn.parentNode.parentNode.classList.add('slide-up')
//   			parent.classList.remove('slide-up')
//   		}
//   	});
//   });



   return (

    <div className="login-page" style={{ paddingTop: "50px" }}>
      <h1>Login </h1>

      <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="email" ></input>
      <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder="password"></input>
      <button onClick={handleClick}>login</button>
{/* //       <div class="form-structor">
//         <div class="signup">
//           <h2 class="form-title" id="signup"><span>or</span>Sign up</h2>
//           <div class="form-holder">
//             <input type="text" class="input" placeholder="Name" />
//             <input type="email" class="input" placeholder="Email" />
//             <input type="password" class="input" placeholder="Password" />
//           </div>
//           <button class="submit-btn">Sign up</button>
//         </div>
//         <div class="login slide-up">
//           <div class="center">
//             <h2 class="form-title" id="login"><span>or</span>Log in</h2>
//             <div class="form-holder">
//               <input type="email" class="input" placeholder="Email" />
//               <input type="password" class="input" placeholder="Password" />
//             </div>
//             <button class="submit-btn">Log in</button>
//           </div> */}
//         </div>
//       </div>
//       <Link to="/register">רישום</Link>
//     </div>


  )
}

 export default Login
