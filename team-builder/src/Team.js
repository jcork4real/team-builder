
import React from 'react';
import './App.css'

const Team = props => {
    return(
      <div>
        {props.members.map(teamMemberEl => (
          <div>
            <h3>{teamMemberEl.name}</h3>
            <p>{teamMemberEl.email}</p>
            <p>{teamMemberEl.role}</p>
          </div>
        ))}
      </div>
    )
  }
  
  
  export default Team;
  