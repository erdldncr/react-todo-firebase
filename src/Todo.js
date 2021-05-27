import {
  Button,
  FormControl,
  Input,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal,
  InputLabel,
} from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import { db } from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function Todo({ todo, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [editedItem, setEditedItem] = useState(todo);
  const handeleClick = () => {
    db.collection("todos")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  const updateTodo = () => {

    db.collection("todos").doc(id).set({
        todo: editedItem
      },{merge:true});
    setOpen(false)
  };
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={classes.paper}>
          <FormControl>
            <InputLabel> Write a Todo</InputLabel>
            <Input
            placeholder={todo}
              value={editedItem}
              onChange={(e) => setEditedItem(e.target.value)}
            />
          </FormControl>
          <Button onClick={ updateTodo}>Update</Button>
        </div>
      </Modal>

      <List className="todo-list">
        <ListItem>
          <ListItemText
            primary={todo}
            secondary={new Date().toLocaleDateString()}
          ></ListItemText>
          <Button onClick={(e) => setOpen(true)}>Edit</Button>
          <Button onClick={handeleClick} color="primary">
            <DeleteForeverIcon />
          </Button>
        </ListItem>
      </List>
    </>
  );
}
