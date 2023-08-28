import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Task } from "./task";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const handelChange = (event) => {
    setTaskInput(event.target.value);
  };
  const addTask = () => {
    let task = {
      id: todoList.length,
      taskValue: taskInput == "" ? "random task" : taskInput,
    };
    let newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };
  const deleteTask = (id) => {
    let newTodoList = todoList.filter((value) => value.id != id);
    setTodoList(newTodoList);
  };
  const modifyTask = (id, newTask) => {
    let newTodoList = todoList.map((task) => {
      if (task.id == id) {
        return { ...task, taskValue: newTask };
      }
    });
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h1>add a task</h1>
      <input
        onChange={handelChange}
        style={{ width: "400px" }}
        type="text"
        className="form-control"
      ></input>
      <button onClick={addTask} className="btn btn-success">
        Add
      </button>
      <div>
        {todoList.map((task) => {
          return (
            <Task
              taskValue={task.taskValue}
              delete={deleteTask}
              id={task.id}
              modify={modifyTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
