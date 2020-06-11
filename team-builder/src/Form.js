import React, {useState} from 'react';
import './App.css'

const Form = props => {
    const [member, setMember] = useState( { name:'', email:'', role:''} )

    const handleChanges = event => {
        console.log(event.target.value)
        setMember({...member, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault()
        props.addTeamMate(member)
        setMember({name:'', email:'', role:''})
    }

    return (

        <form onSubmit={submitForm}>
           <label>
                New Member Name:
                <input  id='name' type='text' placeholder='Member Name' onChange={handleChanges} value={member.name} name= 'name'/>
           </label>

           <label>
              New Member Email: 
               <input id='email' type='text' placeholder='Member Email' onChange={handleChanges} value={member.email} name='email'/>
           </label>

           <label>
              New Member  Role:
               <input id='role' type='text' placeholder='Member Role' onChange={handleChanges} value={member.role} name='role'/>
           </label>

           <button className= 'button' type='submit'>Add New Team Member</button>
        </form>

    )

}

export default Form;