import { ref, set ,onValue} from "firebase/database";
import {Component, Fragment} from "react";
import {useState} from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import './firebaseScript'
import SignIn from "./components/sign-in/sign-in.component";
import SideBar from "./components/sidebar/sidebar.component";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Properties from "./pages/properties";

class App extends Component {

  constructor() {
    super();
  }

  sign_up_google = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  };
  render() {
    return (
        <div>
            <SignIn onClickHandler = {this.sign_up_google}/>
            <SideBar/>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/prop">properties</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/prop">
                        <h1>Hello</h1>
                    </Route>
                </Routes>
                </Router>
        </div>);
  }



}
export default App;
