import React,{ useState } from "react"

export default function Addtodo(prop) {
  // create 2 empty variables to store the data entered from user
  const [title, setTitle] = useState("")
  const [desc, setdesc] = useState("")

  //function to add the info to list itemlist
  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc){
        alert("Please enter both title and description of the task")
    }
    else{
        prop.addTodo(title, desc);
        setTitle("");
        setdesc("");
    }
  }
  return (
    <div className="add-todo">
        <h1>ENTER A TASK</h1>
        <form onSubmit={submit}>
            <div className="ask-1">
                <label htmlFor="task-title" className="form-label">Enter the title</label>
                <input type="text" name="task-title" id="task-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Write the title here" className="form-control"/>
            </div>
            <br/>
            <div className="ask-1">
                <label htmlFor="task-desc" className="form-label">Enter description of task</label>
                <input type="text" name="task-desc" value={desc} onChange={(e) => setdesc(e.target.value)} placeholder="Write the desc here" className="form-control"/>
            </div>
            <button type="submit" className="add-button">  ADD  </button>
        </form>
    </div>
  )
}
