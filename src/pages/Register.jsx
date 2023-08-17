// import React, { useState } from "react";
// import Navbar from "../components/Navbar.jsx";
// import { useNavigate } from "react-router-dom";
// export default function Register() {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   async function save(event) {
//     event.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           userName: userName,
//           password: password
//         })
//       });
//       console.log(response);
//       if(Response.status = 200){
//         console.log('hello')
//         navigate("/login");
//      }
//       const data = await response.json();

//       console.log(data);
//     } catch (err) {
//       alert(err);
//     }
//   }
  

//   return (
//     <div>
//     <Navbar />
//     <div className="login">
//   <div>
//     <form>

//       <div className="formGroup">
//         {/* <label>First name:</label> */}
//         <h3>Username</h3>
//         <input
//           type="text"  
//           className="input-one"
//           value={userName}
//           onChange={(event) => {
//             setUserName(event.target.value)
//           }}
//         />
//       </div>
//       <div className="formGroup-2">
//         {/* <label>Password</label> */}
//         <h3>Password</h3>
//         <input
//         className="input-one"
//           type="text"  
//           value={password}
//           onChange={(event) => {
//             setPassword(event.target.value)
//           }}
//         />
//       </div>

//       <button type="submit" className="login-button" onClick={save}>Register</button>
//     </form>
//    </div>
//   </div>
//   </div>
//   );
// }



