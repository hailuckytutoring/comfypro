import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

// function App({name, age}) {
//   const [ready, setReady] = useState(true);
//   const [state2, setState2] = useState(7); 

//   function showReadyParagraph(){
//     // Destructuring example
//     const person = {
//       name: "ana",
//       age: 18
//     }
//     const {name,age} = person;
//     console.log(name, age);
    
//     //
//     if (ready)
//       return <p>Ready</p>
//     else
//       return <p>Not Ready</p>
//   }

//   return <div>
//     {showReadyParagraph()}
//     <p>Hello {name} age: {age}</p>
//     </div>
// }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ready: true
    }
  }

  showReadyParagraph(){
        // Destructuring example
        const person = {
          name: "ana",
          age: 18
        }
        const {name,age} = person;
        console.log(name, age);
        
        //
        if (this.state.ready)
          return <p>Ready</p>
        else
          return <p>Not Ready</p>
  }

  render(){
    return <p>{this.showReadyParagraph()}</p>
  }
}

export default App;