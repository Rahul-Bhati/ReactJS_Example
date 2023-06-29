import React from "react";

function List(props) {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          onClick={() => {
            return props.onSelect(props.id);
          }}
        />
        <li>{props.itemVal}</li>
      </div>
    </>
  );
}

export default List;
