import { Todo } from "../../types/type";
import { useState } from "react";
const SearchBar = ({
  setSearch,
  search,
}: {
  setSearch: React.Dispatch<React.SetStateAction<Todo[]>>;
  search: Todo[];
}) => {
  const [Task, setTask] = useState<string>("");
  const [Description, setDescription] = useState<string>("");
  const [Status, setStatus] = useState<string>("todo");
  const handleTask = () => {
    if (Task.length > 0) {
      const task = {
        id: Math.floor(Math.random() * 1000),
        task: Task,
        description: Description,
        status: Status,
      };
      setSearch([...search, task]);
      setStatus("notyet");
      setTask("");
      setDescription("");
    } else {
      alert("Please enter a task name");
      return;
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Task name..."
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task description..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleTask}>Add Task</button>
    </div>
  );
};
export default SearchBar;
