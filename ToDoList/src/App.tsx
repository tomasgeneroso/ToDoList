import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import { Todo } from "../types/type";

function App() {
  const [search, setSearch] = useState<Todo[]>([]);

  return (
    <>
      <h1 style={{ marginTop: "2rem" }}>JUST DO IT</h1>
      <div className="container">
        <SearchBar setSearch={setSearch} search={search} />
        <CardList todo={search} setSearch={setSearch} />
      </div>
    </>
  );
}

export default App;
