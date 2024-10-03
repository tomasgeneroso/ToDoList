import React from "react";
import { Todo } from "../../types/type";
import deleteIcon from "../assets/deleteIcon.svg";

const CardList = ({
  todo,
  setSearch,
}: {
  todo: Todo[];
  setSearch: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  const [noYetList, setNoYetList] = React.useState<Todo[]>([]);
  const [doneList, setDoneList] = React.useState<Todo[]>([]);
  const [inProgressList, setInProgressList] = React.useState<Todo[]>([]);
  const handleDelete = (id: number) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setSearch(newTodo);
    localStorage.setItem("todo", JSON.stringify(newTodo));
  };

  const handleStatus = (id: number, option: string) => {
    const newTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, status: option } : todo
    );
    setSearch(newTodo);
  };

  React.useEffect(() => {
    const notYet = todo.filter((t) => t.status === "notyet");
    setNoYetList(notYet);

    const done = todo.filter((t) => t.status === "done");
    setDoneList(done);

    const inProgress = todo.filter((t) => t.status === "inprogress");
    setInProgressList(inProgress);
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="cardListContainer">
      <div className="cardListColumn">
        <div
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            fontSize: "1.5rem",
          }}
        >
          Not yet
        </div>
        {noYetList.map((todo: Todo) => (
          <div className="cardList" key={todo.id}>
            <div className="mx-2">{todo.task}</div>
            <div className="mx-2">{todo.description}</div>
            <div>
              <img
                src={deleteIcon}
                alt="delete"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
            <div>
              <select
                name="status"
                id="status"
                onChange={(e) => handleStatus(todo.id, e.target.value)}
              >
                <option value="todo">To do</option>
                <option value="inprogress">In progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>
        ))}
      </div>
      <div className="cardListColumn">
        <div
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            fontSize: "1.5rem",
          }}
        >
          In progress
        </div>
        {inProgressList.map((todo: Todo) => (
          <div className="cardList" key={todo.id}>
            <div className="mx-2">{todo.task}</div>
            <div className="mx-2">{todo.description}</div>
            <div>
              <img
                src={deleteIcon}
                alt="delete"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
            <div>
              <select
                name="status"
                id="status"
                onChange={(e) => handleStatus(todo.id, e.target.value)}
              >
                <option value="todo">To do</option>
                <option value="inprogress">In progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>
        ))}
      </div>
      <div className="cardListColumn">
        <div
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            fontSize: "1.5rem",
          }}
        >
          Done
        </div>
        {doneList.map((todo: Todo) => (
          <div className="cardList" key={todo.id}>
            <div className="mx-2">{todo.task}</div>
            <div className="mx-2">{todo.description}</div>
            <div>
              <img
                src={deleteIcon}
                alt="delete"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
            <div>
              <select
                name="status"
                id="status"
                onChange={(e) => handleStatus(todo.id, e.target.value)}
              >
                <option value="todo">To do</option>
                <option value="inprogress">In progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
