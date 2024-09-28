import React from "react";
import { MdDelete } from "react-icons/md";

const TodoList = (props) => {
  return (
    <div>
      <li className="list-item">
        {props.item}
        <span className="icons">
          <MdDelete
            className="icon-delete"
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          />
        </span>
      </li>
    </div>
  );
};

export default TodoList;
