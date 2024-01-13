import { firebaseApp,firestore} from "./firebase/config";



// function App() {
//   return (
//     <div className="App">
//       <h1>Fetch data from firebase firestore DB</h1>
//       <button onClick={()=>{
//         console.log('hiiii')
//         firebaseApp.firestore().collection('products ').get().then(snapshot => {
//           snapshot.forEach((obj) => {
//               console.log(obj.data())
//             })
//         })

//       }}>click here</button>
//     </div>
//   );
// }

// export default App;




// ADDING DATA

// function App() {
//   return (
//     <div className="App">
//       <h1>Fetch data from firebase firestore DB</h1>
//       <button onClick={()=>{
//         console.log('hiiii')
//         firebaseApp.firestore().collection('products ').add({
//           name:'google',
//           price:50000,
//           model:'pixel 4a'
//         })
      

//       }}>click here</button>
//     </div>
//   );
// }

// export default App;



// DELETING DATA USING ID FROM FIREBASE
// function App() {
//   return (
//     <div className="App">
//       <h1>Fetch data from firebase firestore DB</h1>
//       <button onClick={()=>{
//         console.log('hiiii')
//         firebaseApp.firestore().collection('products').doc('oE6ILWsygPPUluqbgiEB').delete().then(()=>{
//           console.log('DATA DELETED')
//         }).catch((error) => {
//           console.error("Error removing document: ", error);
//       });
//       }}>click here</button>
//     </div>
//   );
// }

// export default App;

//  UPDATION USING FRONTEND
function App() {
  return (
    <div className="App">
      <h1>Fetch data from firebase firestore DB</h1>
      <button onClick={()=>{
        console.log('hiiii')
        firebaseApp.firestore().collection('products').doc('oE6ILWsygPPUluqbgiEB').set({
          name:'google PIXAL'
        }).then(()=>{
          console.log('updated')
        })
      }}>click here</button>
    </div>
  );
}

export default App;