import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import './Todo.css'
import React from 'react'
import { db } from './firebase'

export default function Todo({todo,id}) {
    const handeleClick=()=>{

        db.collection("todos").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });

    }
    return (
        <List className='todo-list' > 
            <ListItem>
                
                <ListItemText primary={todo} secondary={new Date().toLocaleDateString()}>

                </ListItemText>
                <Button 
                onClick={handeleClick}
                color='primary'>
                    Delete
                </Button>
            </ListItem>
            
            
        </List>
    )
}
