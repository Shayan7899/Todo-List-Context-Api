import React from "react";

const AddTodo = ({onAdd}) => {
  const [text, setText] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Please enter a todo");
      return;
    }
    onAdd(text);
    setText("");
    
  }
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add Your Todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
