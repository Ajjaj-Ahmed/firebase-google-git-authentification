import React, { useState } from 'react';
import app from '../assets/firebase/firebase.init';
import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";




const Login = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth(app);
  
  const githubProvider = new GithubAuthProvider();

  const handleGithubSignIn = () =>{
      signInWithPopup(auth,githubProvider)
      .then(result =>{
        const logInUser = result.user;
        console.log(logInUser);
        setUser(logInUser)
      })
      .catch(error=>{
        console.log(error);
      })
  }

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIN = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const logInUser = result.user;
        console.log(logInUser)
        setUser(logInUser)
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage)
      })
  }

  const handleSignOut = () =>{
    signOut(auth)
    .then(result=>{
      console.log(result);
      setUser(null);
    })
    .cathc(error =>{
      console.log(error);
    })
  }
  return (
    <div>
      {/* user ? log out : sign In */}
     { user ?
     <button onClick={handleSignOut}>Sign Out</button> :
      <>
        <button onClick={handleGoogleSignIN}>Google Log In</button>
        <button onClick={handleGithubSignIn}>GitHub login</button>
      </>
      }
      

      {/* conditional rendering */}

      {user && <div> 
        <h2>User Name : {user.
          displayName}</h2>
        <p>Email : {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
};

export default Login;