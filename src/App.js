import React from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <div>
      <CardList />
      <SearchBox />
    </div>
  );
}
