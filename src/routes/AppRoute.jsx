import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Counter } from "../pages/Counter.page";
import { MainLayout } from "../layout/Main.Layout";
import { Todo } from "../pages/Todo.page";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Counter />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
