// user input - includes validation
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group container">
        <input 
          type="text"
          className="form-control" 
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)} />
      </div>
    </form>
  )
}