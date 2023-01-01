import './mycomponents/style.css';
import Header from './mycomponents/header';
import Todos from './mycomponents/todos';
import Footer from './mycomponents/footer';
import Addtodo from './mycomponents/addtodo';
import About from './mycomponents/about';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';

function App() {
  let initTodo;
  if(localStorage.getItem("itemlist") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("itemlist"));
  }

  const [username,setValue] = useState("");
  const setUser = (user) => {
    setValue(user)
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of",todo);
    SetTodos(itemlist.filter((e) => {
      return e!==todo;
    }))
    localStorage.setItem("itemlist",JSON.stringify(itemlist));
  }

  const addTodo = (title, desc) => {
    let sno;
    if(itemlist.length === 0){
      sno = 0;
    }
    else{
      sno = itemlist[itemlist.length - 1].id + 1;
    }
    const mytodo = {
      id: sno,
      title: title,
      name: username,
      desc: desc
    }
    SetTodos([...itemlist,mytodo]);
    console.log("adding", title, "and", desc, "id",sno, "user",username);
    console.log(itemlist);

  }


  const [itemlist, SetTodos] = useState(initTodo);
  useEffect(() => {
    // to add the data to local storage
    localStorage.setItem("itemlist",JSON.stringify(itemlist))
  }, [itemlist])
  return (
    
    <>
    <Router>
      <Header title="TODO-LIST"/>

      <Switch>
        <Route exact path='/' element={
          <>
            <About setUser={setUser}/>
          </>
        }>
        </Route>
        <Route exact path='/todo' element = {
            <>
              <Addtodo addTodo={addTodo}/>
              <Todos todos={itemlist} onDelete={onDelete} username={username}/>
            </>
        }>
        </Route>

      </Switch>

      <Footer/>
    </Router>
    </>
  )
}

export default App;
