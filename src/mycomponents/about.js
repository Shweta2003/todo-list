import React, { useState } from 'react'

export default function About(prop) {
  const [val,setValue] = useState("");
  //function to add the info to list itemlist
  const submit1 = (e) => {
    e.preventDefault();
    if(!val){
        alert("Please enter your name")
    }
    else{
        prop.setUser(val);

        setValue(val+" go to Todo-List-page or enter new name");
        
    }
  }

  return (
    <div className='about-body'>
        <h1 className='how'>HOW TO USE THE APP</h1>
        <ul className='about-ul'>
            <li className='about-li'>First enter your name below</li>
            <li className='about-li'>Now go to the todo-list section of the website</li>
            <li className='about-li'>Using the add menu, you can add a new task on your list</li>
            <li className='about-li'>Then the task is displayed along with other tasks you need to complete.</li>
            <li className='about-li'>Using the delete button you can delete any task nomore required or completed.</li>
        </ul>
        <hr className='hr-1'></hr>
        <form onSubmit={submit1}>
            <div className='ask-1'>
                <label htmlFor="name-in" className='form-label'>ENTER YOUR NAME</label>
                <input placeholder='name' id="name-in" className='form-control fo' value={val} onChange={(e) => setValue(e.target.value)}></input>
            </div>
                <button type="submit" className="add-button go"> GO  </button>  
        </form>
    </div>
  )
}
