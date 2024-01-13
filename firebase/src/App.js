import { firebaseApp,firestore} from "./firebase/config";
// import { doc } from "./firebase/config";
// import { collection, getDocs } from "firebase/firestore";


// async function fetchDataFromFirebase(){
//   const querysnapshot=await getDocs(collection(db,'products'))
//   const data=[]
//   querysnapshot.forEach((doc)=>{
//     data.pushs({id:doc.id,...doc.data()})
//   })
//   return data
// }



function App() {
  return (
    <div className="App">
      <h1>Fetch data from firebase firestore DB</h1>
      <button onClick={()=>{
        console.log('hiiii')
        firebaseApp.firestore().collection('products ').get().then(snapshot => {
          snapshot.forEach((obj) => {
              console.log(obj.data())
            })
        })

      }}>click here</button>
    </div>
  );
}

export default App;
