import React from "react";
import { useState } from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { addItem, editItem, deleteItem } from "./actions/form.actions";

import "./styles.css";

const App = props => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const handleAdd = () => {
    props.addItem(inputValue);
    setInputValue("");
  };

  return (
    <div className="App">
      <div className="hookForm">
        <h3>The clients List</h3>

        {props.items.map((item, key) => (
          <li key={key}>
            <input
              className="input__item"
              value={item}
              onChange={e => props.editItem(key, e.target.value)}
            />
            <span
              className="button__item"
              onClick={() => props.deleteItem(key)}
            >
              Delete
            </span>
          </li>
        ))}

        <input
          className="input__lastname"
          value={inputValue}
          onChange={handleChange}
          placeholder="lastname"
        />
        <button className="button__lastname" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const list = state.todosReducers;
  console.log(list);
  return {
    items: state.todosReducers
  };
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  editItem: (item, key) => dispatch(editItem(item, key)),
  deleteItem: key => dispatch(deleteItem(key))
});

App.propTypes = {
  items: Proptypes.array,
  addItem: Proptypes.func,
  editItem: Proptypes.func,
  deleteItem: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
