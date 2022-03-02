function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = e => {
    var index = Number(e.target.id);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <>
      <div className="container">
      <ul className="list-group">
      {todos.map((todo, i) => (
        <li className="list-group-item" key={i} id={i} onClick={removeTodo}>
          {todo.text}&nbsp;&nbsp;
          <button onClick={removeTodo} className="btn btn-secondary btn-sm">X</button>
        </li>
      ))}
      </ul>
      </div>
      <TodoForm addTodo={addTodo} />
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
