// import User from './User'

import React from "react"

// function App(){
//   let users =[
//     {
//       id: 323,
//       name:"sharif",
//       age:'19',
//       place:'Vijayawada'
//     },
//     {
//       id:21323,
//       name:'Ahehflai',
//       age:3434,
//       place:"Banglore"
//     },
//     {
//       id:434323,
//       name:'Ahehflai',
//       age:3434,
//       place:"aievjl"
//     }
//   ]
  
//   return (
//     <>
//     {
//       users.map(
//         (u) => {
//           // with the keyboard u only your mapping the users list 
//           return <User key={u.id}  id={u.id} name={u.name} age={u.age} place={u.place}></User>
//         }
//       )
//     }
//     </>
//   )
// }
// export default App
// ====================================== Video 12
// This the named function 

// import React from "react"
// function App(props){
//   return(
//     // <div>
//       <React.Fragment> 
//       <h1>This is heading </h1>
//       <h1>This is Paragraphf</h1>
//       {/* Below line is the child props  */}
//       <p style={{display:'flex' ,gap:20}}>{props.children  }</p>
//       {/* With this help of props.children you can able to see the in UI and in the console you can able to see the objects */}
//       {/* And in the child props ==> props.children is fixed, you can able to do that */}
    
//     {/* With the help of react fragments we didn't use another div block in the viewport in the page */}
//     </React.Fragment> 
//     // </div>
//   )
// }

// This is Flex items 

// function App(){
//   return(
//     <div style={{display:"flex"}}>
//       <FlexItems/>
//     </div>
//   )
// }

// function FlexItems(){
//   return (
//     <>
//       <div> This is div</div>
//       <div> This is div1</div>
//       <div> This is div12</div>
//     </>
//   )
// }

// Event Handling 
function App(){
  let num = 10
  function displayMessage(num,e){
    alert("button clicked "+ num)
    console.dir(e.target)
  }

  return(
    // <button onClick ={()=> {
    //   alert("your in the game zone ")
    // }}>Click</button>
    // <button onClick={() => {displayMessage(10)}}>hiJEN</button>
    <input type="text" onKeyUp={(e) => {
      displayMessage(121,e)
    }}/>
  )
}

export default App