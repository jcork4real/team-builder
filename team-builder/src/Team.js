
import React from 'react';
import './App.css'

const Team = props => {
    return(
      <div>
        {props.members.map(member => (
          <div>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    )
  }
  
  
  export default Team;
  