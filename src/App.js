import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import { useState,useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import {db} from './firebase'
import firebase from "firebase";
function App() {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");

  useEffect(()=>{

    db.collection('todos').orderBy('timestamp','asc').onSnapshot(snapshot=>{
    
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    })
    
  },[])

  const handleClick = (e) => {
    e.preventDefault();

   
    db.collection('todos').add({
      todo:item,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setItem("");
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form action="">
        <FormControl>
          <InputLabel >Write a Todo</InputLabel>
          <Input
           value={item}
           onChange={(e) => setItem(e.target.value)}
          />
        </FormControl>

        <Button
          disabled={!item}
          type="submit"
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((item) => (
          <Todo{...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
