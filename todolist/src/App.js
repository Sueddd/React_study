import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/main";
import { useState } from "react";
import TodoPage from "./pages/todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/todo" element={<TodoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
