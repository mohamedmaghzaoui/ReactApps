import { useState } from "react";

export const Task = (props) => {
  const handelChange = (event) => {
    setModifyInput(event.target.value);
  };
  const [modifyInput, setModifyInput] = useState("");
  const [showModofyInput, showOrHide] = useState(false);
  return (
    <div>
      <p>{props.taskValue}</p>
      <button onClick={() => props.delete(props.id)} className="btn btn-danger">
        delete
      </button>
      <button
        onClick={() => showOrHide(!showModofyInput)}
        className="btn btn-primary"
      >
        modify
      </button>
      {showModofyInput && (
        <div>
          <input
            onChange={handelChange}
            style={{ width: "400px" }}
            type="text"
            className="form-control"
          ></input>
          <button
            onClick={() => {
              props.modify(props.id, modifyInput);
              showOrHide(!showModofyInput);
            }}
            className="btn btn-success"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};
