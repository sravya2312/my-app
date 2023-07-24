import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import Input from "./components/input";
import Box from "./components/box";

function App() {
  const [todos,setToDo] = useState([]);
  const [data, setData] = useState("")
  const [changesRequested, setchangesRequested] = useState(false);
  const [id, setId] = useState();

  const removeToDo = (id) => {
    console.log(id);
    const newTodos = todos.filter(
       (d,index) => {
          if(index !== id){
            return true;
          }else{
            return false;
          }
       }
    )
    setToDo(newTodos); 
  }

  const addToDoHandler = (item) => {
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  const save = (todo) =>{
    var a = Array.from(todos);
    
    a[id].item = todo;
    a[id].time = new Date().toLocaleTimeString();
    console.log(a);
    setData("");
    setchangesRequested(false);
    setToDo(a);
  }
  const handleEdit = (id, todo) => {
    var a = Array.from(todos);
    setchangesRequested(true);
    setData(todo);
    setId(id);
    
    // setToDo(a);
  }
 
  return (
    <div className="bg-black h-screen p-3">
      {console.log("jjaj")}
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
        <Input handler={addToDoHandler} data = {data} changesRequested = {changesRequested} id ={id} handleEdit = {save} />
        <Box data={todos}  removeHandler={removeToDo} handleEdit = {handleEdit}/>
      </div>
    
          
    </div>
  );
}

export default App;