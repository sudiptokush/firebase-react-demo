import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyAymDTuX2_OYJW_rueHwb9T2UxPNxOWcVA",
    authDomain: "sitevisit-6facd.firebaseapp.com",
    databaseURL: "https://sitevisit-6facd.firebaseio.com",
    projectId: "sitevisit-6facd",
    storageBucket: "sitevisit-6facd.appspot.com",
    messagingSenderId: "714258084854",
    appId: "1:714258084854:web:16d8ced393612b30"
  };

firebase.initializeApp(firebaseConfig)

// Code to insert into firebase
// ============================================
// firebase.database().ref('kush-infotech/2').set({
//     id: 2,
//     IP: '166.196.187.7'
// }).then(()=> {
//             console.log("Inserted");
//         }).catch((error)=> {
//             console.log(error);
//         });

//=============================================


//Code to select from firebase once. But will not update if value changed later
//==============================================

// firebase.database().ref('kush-infotech').once('value', (data) => {
//     console.log(data.toJSON());
// });

//==============================================


//Code to select from firebase. Will get new data if data is changed
//==================================================

// firebase.database().ref('users').on('value', (data) => {
//     console.log(data.toJSON());
// });

//==============================================

//Code to update data in firebase.
//==================================================

// firebase.database().ref('users/002').update ({
//     IP: "162.143.178.10"
// }).then(()=> {
//                 console.log("Updated");
//             }).catch((error)=> {
//                 console.log(error);
//             });

//==================================================


//Code to delete data in firebase.
//==================================================

// To Delete name of 002 in user table
// firebase.database().ref('users/002/name').remove().then(()=> {
//                 console.log("Deleted");
//             }).catch((error)=> {
//                 console.log(error);
//             });


// To Delete user 002 in user table
// firebase.database().ref('users/002').remove().then(()=> {
//                 console.log("Deleted");
//             }).catch((error)=> {
//                 console.log(error);
//             });

//==================================================



// Actual Code Implementation
// =====================================================

    const IP = "169.191.184.17"

    // To check if IP exist
    firebase.database().ref(`kush-infotech`).orderByChild("IP").equalTo(IP).once("value", snapshot => {
        if (snapshot.exists()){
           console.log("exists!");
         }
         else {
            firebase.database().ref('kush-infotech/Count').once('value', function(snapshot) {
               
                //To get the count value
                const count = snapshot.val();
                const newCount = count + 1;
            
                //To update count
                firebase.database().ref('kush-infotech/Count').set(newCount).then(()=> {
                    console.log("Inserted");
                }).catch((error)=> {
                    console.log(error);
                });


                // To insert data

                firebase.database().ref('kush-infotech/' + newCount).set({
                    id: newCount,
                    IP: IP
                }).then(()=> {
                    console.log("Inserted");
                }).catch((error)=> {
                    console.log(error);
                });
            });
         }
     });

// =========================================================

    
// firebase.database().ref('kush-infotech/Count').set(3).then(()=> {
//     console.log("Inserted");
// }).catch((error)=> {
//     console.log(error);
// });



ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
