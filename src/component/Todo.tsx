import List from "./List";
import Form from "./Form";

const Todo = ({ todos, doneFn, addFn }: { todos: string[], doneFn: (v:number) => void , addFn:(v:string) => void}) => {
  return (
    <>
      <List todos={todos} doneFn={(v:number) => doneFn(v)}/>
      <Form addFn={(v:string) => addFn(v)}/>
    </>
  );
};

export default Todo;
