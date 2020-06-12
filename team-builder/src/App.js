import React, {useState}  from 'react';
import './App.css';

import Form from './Form';
import Team from './Team';

// Step 1 : Set Up State
// Import the useState hook 


function App() {

  // Step 1 : Set Up State cont'd
  //set up state to keep your team members list.

  const [teamMembers, setTeamMembers] = useState([
    // Give the state variable you just declared a default value. You will need to keep track of a 
    // list of team members and each team member will have several key/value pairs associated with them.
    {
     id: 0,
     name: 'Jcork 4real',
     email: 'jcork4real@gmail.com',
     role: 'cool guy'
    },
    {
     id: 1,
     name: 'Stork James',
     email: 'storkjames@gmail.com',
     role: 'cool guy'
    },
    {
     id: 2,
     name: 'Hunter Hurst Helmsley',
     email: 'tripleh@gmail.com',
     role: 'cool guy'
    }
  ])

  // *
  const addTeamMate = el => {
    setTeamMembers([...teamMembers, {...el}])
  }

  return (
    <div className="App">
      {/* Render your list of team members. */}
        <h1>The Team List</h1>
        <Form addTeamMate = {addTeamMate}/>
        <Team members={teamMembers}/>
    </div>
  );
}


export default  App;