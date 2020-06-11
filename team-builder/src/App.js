import React from 'react';
import logo from './logo.svg';
import './App.css';

// Step 1 : Set Up State
// Import the useState hook 
import React, {useState} from  'react';


function App() {

  // Step 1 : Set Up State cont'd
  //set up state to keep your team members list.

  const [teamMembers, setTeamMembers] = useState([
    // Give the state variable you just declared a default value. You will need to keep track of a 
    // list of team members and each team member will have several key/value pairs associated with them.
    {
     id: 0,
     name: 'Jcork 4real',
   
    },
    {
     id: 1,
     name: 'Stork James',
     
    },
    {
     id: 2,
     name: 'Hunter Hurst Helmsley',
  
    }
  ])

  return (
    <div className="App">
      {/* Render your list of team members. */}
    </div>
  );
}

export default App;
