import { firebaseApp } from "./firebase/config";


function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={()=>{
        firebaseApp.firestore().collection('products').get().then(snapshot=>{
            snapshot.forEach((obj)=>{
              console.log(obj.data())
            })
        })

      }}>click here</button>
    </div>
  );
}

export default App;
