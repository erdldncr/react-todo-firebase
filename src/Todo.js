import { List, ListItem, ListItemText } from '@material-ui/core'
import './Todo.css'
import React from 'react'

export default function Todo({todo}) {
    return (
        <List className='todo-list' > 
            <ListItem>
                
                <ListItemText primary={todo} secondary={new Date().toLocaleDateString()}>

                </ListItemText>

            </ListItem>
            
            
        </List>
    )
}
