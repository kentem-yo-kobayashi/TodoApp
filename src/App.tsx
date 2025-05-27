import { useState } from "react";
import Todo from "./component/Todo";
import { ChakraProvider } from "@chakra-ui/react";

const initialTodos = ["店予約する", "卵買う", "郵便出す"];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleDoneClick = (index: number) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo, i) => {
        if (index !== i) {
          return todo;
        }
      });
      return newTodos;
    });
  };

  const handleAddClick = (value: string) => {
    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos.push(value);
      return newTodos;
    });
  };

  return (
    <Todo
      todos={todos}
      doneFn={(index: number) => handleDoneClick(index)}
      addFn={(value: string) => handleAddClick(value)}
    />
  );
}

export default App;
