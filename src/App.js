// import { Component }  from "react";
// import logo from './logo.svg';

import { ref, set ,onValue} from "firebase/database";
import {useState} from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import {database} from "./firebaseScript";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';
import './firebaseScript'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [valueToDb, setValueToDb] = useState('')
  const[userMail,setUserMail] = useState('')
  const[userPassword,setPassword] = useState('')
  const[readValue,setReadValue] = useState({})
  const[counter,setCounter] = useState(0)

  // function writeText(text) {
  //   set(ref(database, 'text/' + counter), {
  //     text: text
  //   });
  //   setCounter((prevC)=>prevC+1)
  //   fetch("https://google.com").then(res => console.log(res))
  // }

  function sign_up_google(){
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
  }
  // function sign_up_new_user(email, password) {
  //
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         // ...
  //         alert("test");
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         alert(errorMessage.toString());
  //         // ..
  //       });
  //
  // }
  // function deleteData(dataToDelete) {
  //     set(ref(database, 'text/' + dataToDelete), {
  //         text: null
  //     });
  //
  // }
  // function readData() {
  //   onValue(ref(database, 'text'), (snapshot) => {
  //     const data = snapshot.val();
  //     setReadValue(data)
  //     setIsLoading(false)
  //
  //   });
  // }

  // if (isLoading){
  //   //readData()
  //   return <div>sivan</div>
  //
  // }


  return <div>
    <div>{JSON.stringify(readValue)}</div>
    {/*<input value={valueToDb} onChange={(event)=>setValueToDb(event.target.value)}/>*/}
    {/*<button onClick={()=>writeText(valueToDb)}>click me</button>*/}
    {/*<label htmlFor="mail">mail:</label>*/}
    {/*<input id="mail" value={userMail} onChange={(event)=>setUserMail(event.target.value)}/>*/}

    {/*<input value={userPassword} onChange={(event)=>setPassword(event.target.value)}/>*/}
    {/*<button onClick={()=>sign_up_new_user(userMail,userPassword)}>click me</button>*/}
    <button onClick={()=>sign_up_google()}>sign in with google</button>
  </div>


}

// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = { name : { first: "Sivan",
//                             last:"Miller" },
//                    company: "Apple"
//     };
//   }
//   render() {
//     return (
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo"/>
//             <p>
//               My name is {this.state.name.first} {this.state.name.last} I work at {this.state.company}
//             </p>
//             <button onClick={() => {
//               if (this.state.name.first == "Sivan") {
//                 this.setState({
//                   name: {
//                     first: "Tom",
//                     last: "Miller"
//                   },
//                   company: "Microsoft"
//                 });
//               }
//               if (this.state.name.first == "Tom") {
//                 this.setState({
//                   name: {
//                     first: "Sivan",
//                     last: "Miller"
//                   },
//                   company: "Apple"
//                 });
//               }
//             }}
//             >
//               Change Name
//             </button>
//           </header>
//         </div>
//     );
//   }
// }

export default App;
